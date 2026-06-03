#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import html
import json
import mimetypes
import re
import shutil
import time
from dataclasses import dataclass, field
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse
from urllib.request import Request, urlopen
from xml.etree import ElementTree


USER_AGENT = "Mozilla/5.0 (compatible; FELFERImageCurator/2.0)"
IMAGE_EXTENSIONS = {
    ".apng",
    ".avif",
    ".bmp",
    ".gif",
    ".ico",
    ".jpeg",
    ".jpg",
    ".png",
    ".svg",
    ".webp",
}
SKIP_MARKERS = (
    "transparent_placeholder",
    "data:image/",
    "spacer.gif",
)


@dataclass
class Candidate:
    key: str
    urls: set[str] = field(default_factory=set)
    source_pages: set[str] = field(default_factory=set)
    contexts: set[str] = field(default_factory=set)
    folder: str = ""
    label: str = ""
    order: int = 0


class CuratedHTMLParser(HTMLParser):
    def __init__(self, page_url: str) -> None:
        super().__init__(convert_charrefs=True)
        self.page_url = page_url
        self.images: list[tuple[list[str], str, str, str]] = []
        self.current_section = default_section_for_page(page_url)
        self.last_heading = ""
        self._heading_tag = ""
        self._heading_parts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = {key.lower(): value or "" for key, value in attrs}
        aid = attr.get("data-aid", "")
        ux = attr.get("data-ux", "")

        if tag == "section":
            section = infer_section_from_context(self.page_url, aid, ux, "", self.last_heading)
            if section:
                self.current_section = section

        if tag in {"h1", "h2", "h3"}:
            self._heading_tag = tag
            self._heading_parts = []

        if tag in {"img", "source", "meta", "link"}:
            urls = image_urls_from_attrs(attr, self.page_url, tag)
            if urls:
                alt = attr.get("alt") or attr.get("aria-label") or ""
                context = " ".join(part for part in (aid, ux, alt, self.current_section, self.last_heading) if part)
                folder = infer_folder(self.page_url, urls, context)
                label = infer_label(urls, alt, aid, ux, self.last_heading, folder)
                self.images.append((urls, folder, label, context))

        for key in ("style", "data-ux-img"):
            if attr.get(key):
                urls = [normalize_url(url, self.page_url) for url in extract_css_urls(attr[key])]
                urls = [url for url in urls if looks_like_image_url(url)]
                if urls:
                    context = " ".join(part for part in (tag, key, aid, ux, self.current_section, self.last_heading) if part)
                    folder = infer_folder(self.page_url, urls, context)
                    label = infer_label(urls, "", aid, ux, self.last_heading, folder)
                    self.images.append((urls, folder, label, context))

    def handle_data(self, data: str) -> None:
        if self._heading_tag:
            self._heading_parts.append(data)

        urls = [normalize_url(url, self.page_url) for url in extract_text_image_urls(data)]
        if urls:
            context = f"embedded-css {self.current_section} {self.last_heading}".strip()
            folder = infer_folder(self.page_url, urls, context)
            label = infer_label(urls, "", "", "", self.last_heading, folder)
            self.images.append((urls, folder, label, context))

    def handle_endtag(self, tag: str) -> None:
        if tag == self._heading_tag:
            text = clean_text(" ".join(self._heading_parts))
            if text:
                self.last_heading = text
                section = infer_section_from_heading(self.page_url, text)
                if section:
                    self.current_section = section
            self._heading_tag = ""
            self._heading_parts = []


def fetch(url: str, *, timeout: int = 30) -> tuple[bytes, dict[str, str], str]:
    request = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(request, timeout=timeout) as response:
        headers = {key.lower(): value for key, value in response.headers.items()}
        return response.read(), headers, response.geturl()


def normalize_url(value: str, base_url: str) -> str:
    value = html.unescape(value.strip()).strip("\"'")
    value = value.replace("\\/", "/").rstrip("\\),.;")
    if value.startswith("//"):
        value = "https:" + value
    return urljoin(base_url, value)


def clean_text(value: str) -> str:
    return re.sub(r"\s+", " ", html.unescape(value)).strip().strip("\"'")


def slugify(value: str, fallback: str = "image") -> str:
    value = clean_text(unquote(value)).lower()
    value = re.sub(r"https?://", "", value)
    value = re.sub(r"[^a-z0-9áéíóúñü]+", "-", value)
    value = value.strip("-")
    return value or fallback


def extract_css_urls(text: str) -> list[str]:
    urls: list[str] = []
    for match in re.finditer(r"url\((['\"]?)(.*?)\1\)", text, re.I | re.S):
        urls.append(match.group(2))
    return urls


def extract_text_image_urls(text: str) -> list[str]:
    urls = re.findall(r"https?:\\/\\/[^\"'\\\s<>]+|https?://[^\"'\s<>]+|//[^\"'\s<>]+", text)
    cleaned: list[str] = []
    for url in urls:
        normalized = normalize_url(url, "https://felfer.com.mx/")
        path = unquote(urlparse(normalized).path)
        if path.count("(") != path.count(")"):
            continue
        if looks_like_image_url(normalized):
            cleaned.append(normalized)
    return cleaned


def image_urls_from_attrs(attr: dict[str, str], page_url: str, tag: str) -> list[str]:
    urls: list[str] = []
    if tag == "img":
        for key in ("src", "data-src", "data-srclazy", "data-lazy-src"):
            if attr.get(key):
                urls.append(normalize_url(attr[key], page_url))
        for key in ("srcset", "data-srcset", "data-srcsetlazy"):
            urls.extend(parse_srcset(attr.get(key, ""), page_url))
    elif tag == "source":
        urls.append(normalize_url(attr.get("src", ""), page_url))
        urls.extend(parse_srcset(attr.get("srcset", ""), page_url))
    elif tag == "meta":
        prop = (attr.get("property") or attr.get("name") or "").lower()
        if "image" in prop and attr.get("content"):
            urls.append(normalize_url(attr["content"], page_url))
    elif tag == "link":
        rel = attr.get("rel", "").lower()
        if any(token in rel for token in ("icon", "image_src", "preload")) and attr.get("href"):
            urls.append(normalize_url(attr["href"], page_url))

    clean_urls = []
    for url in urls:
        if looks_like_image_url(url):
            clean_urls.append(url)
    return clean_urls


def parse_srcset(value: str, page_url: str) -> list[str]:
    urls: list[str] = []
    for part in value.split(","):
        candidate = part.strip().split(" ", 1)[0]
        if candidate:
            urls.append(normalize_url(candidate, page_url))
    return urls


def looks_like_image_url(url: str) -> bool:
    if not url or any(marker in url for marker in SKIP_MARKERS):
        return False
    parsed = urlparse("https:" + url if url.startswith("//") else url)
    path = unquote(parsed.path).lower()
    if parsed.netloc.endswith("wsimg.com") and any(marker in path for marker in ("/isteam/", "/blobby/", "/favicon/")):
        return True
    return Path(path).suffix in IMAGE_EXTENSIONS


def page_slug(page_url: str) -> str:
    path = unquote(urlparse(page_url).path).strip("/")
    mapping = {
        "": "home",
        "est-taludes": "estabilizacion-de-taludes",
        "carreteras-1": "carreteras-conservacion-vial",
        "urbanización": "urbanizacion",
        "urbanizacion": "urbanizacion",
        "edificación": "edificacion",
        "edificacion": "edificacion",
        "obras-de-drenaje": "obras-de-drenaje",
        "terracería": "terracerias",
        "terraceria": "terracerias",
        "estructuras": "estructuras",
        "nuestros-servicios": "general",
    }
    if path.startswith("f/"):
        return slugify(path.removeprefix("f/"), "proyecto")
    return mapping.get(path, slugify(path, "page"))


def page_type(page_url: str) -> str:
    path = unquote(urlparse(page_url).path).strip("/")
    if not path:
        return "home"
    if path.startswith("f/"):
        return "project"
    if path in {
        "est-taludes",
        "carreteras-1",
        "urbanización",
        "urbanizacion",
        "edificación",
        "edificacion",
        "obras-de-drenaje",
        "terracería",
        "terraceria",
        "estructuras",
        "nuestros-servicios",
    }:
        return "service"
    return "page"


def default_section_for_page(page_url: str) -> str:
    kind = page_type(page_url)
    if kind == "home":
        return "home/hero"
    if kind == "service":
        return f"services/{page_slug(page_url)}/hero"
    if kind == "project":
        return f"projects/{page_slug(page_url)}"
    return slugify(page_slug(page_url))


def infer_section_from_heading(page_url: str, heading: str) -> str:
    heading_slug = slugify(heading)
    if page_type(page_url) == "home":
        if "clientes-destacados" in heading_slug:
            return "home/clients"
        if "obras-destacadas" in heading_slug:
            return "home/obras"
    return ""


def infer_section_from_context(page_url: str, aid: str, ux: str, alt: str, heading: str) -> str:
    context = slugify(" ".join((aid, ux, alt, heading)))
    kind = page_type(page_url)
    slug = page_slug(page_url)
    if "logos" in context:
        return "home/clients"
    if "rss" in context or "obras-destacadas" in context:
        return "home/obras" if kind == "home" else f"projects/{slug}"
    if "header" in context:
        if kind == "home":
            return "home/hero"
        if kind == "service":
            return f"services/{slug}/hero"
    if "about" in context:
        if kind == "home":
            return "home/about"
        if kind == "service":
            return f"services/{slug}/gallery"
    return ""


def infer_folder(page_url: str, urls: list[str], context: str) -> str:
    context_slug = slugify(context)
    url_text = slugify(" ".join(urls))
    kind = page_type(page_url)
    slug = page_slug(page_url)

    if "favicon" in url_text or "link-icon" in context_slug:
        return "icons"
    if "logo" in url_text or "image-logo" in context_slug or "header-logo" in context_slug or "blob-c4aab15" in url_text:
        if "logos" in context_slug:
            return "home/clients"
        return "brand"
    if kind == "home":
        if "logos" in context_slug or "clientes-destacados" in context_slug:
            return "home/clients"
        if "rss" in context_slug or "obras-destacadas" in context_slug:
            return "home/obras"
        if "about" in context_slug:
            return "home/about"
        return "home/hero"
    if kind == "service":
        if "header" in context_slug or "embedded-css" in context_slug:
            return f"services/{slug}/hero"
        return f"services/{slug}/gallery"
    if kind == "project":
        return f"projects/{slug}"
    return slug


def infer_label(urls: list[str], alt: str, aid: str, ux: str, heading: str, folder: str) -> str:
    text = " ".join((alt, aid, ux, heading, " ".join(urls)))
    text_slug = slugify(text)
    base_slug = asset_slug(urls[0])

    known = {
        "blob-c4aab15": "logo-felfer",
        "logo-capufe": "logo-capufe",
        "sedena-logo": "logo-sedena",
        "sict-logo": "logo-sict",
        "logo-cei": "logo-cei",
        "logo2": "logo-cliente-logo2",
        "mota-engil": "logo-mota-engil",
        "cicsa": "logo-cicsa",
    }
    for marker, label in known.items():
        if marker in text_slug or marker in base_slug:
            return label

    if folder == "home/hero":
        return f"hero-{base_slug}"
    if folder == "home/clients":
        return f"logo-cliente-{base_slug}"
    if folder == "home/obras":
        return f"obra-destacada-{base_slug}"
    if "/hero" in folder:
        return f"hero-{page_slug_from_folder(folder)}-{base_slug}"
    if folder.startswith("projects/"):
        return f"proyecto-{page_slug_from_folder(folder)}"
    return base_slug


def page_slug_from_folder(folder: str) -> str:
    parts = folder.split("/")
    if len(parts) >= 2:
        return parts[1]
    return parts[0]


def asset_slug(url: str) -> str:
    path = unquote(urlparse(url).path).split("/:")[0]
    stem = Path(path).stem
    if stem.lower() in {"ip", "isteam", "getty"}:
        stem = path
    return slugify(stem, "image")


def asset_key(url: str) -> str:
    parsed = urlparse(url)
    path = unquote(parsed.path).split("/:")[0]
    return f"{parsed.netloc.lower()}{path.lower()}"


def quality_score(url: str) -> int:
    if any(marker in url for marker in SKIP_MARKERS):
        return 0
    values = [float(value) for value in re.findall(r"(?:w:|h:|w=|h=)([0-9.]+)", url)]
    if len(values) >= 2:
        return int(values[0] * values[1])
    if len(values) == 1:
        return int(values[0] * values[0])
    if "/:/" not in url:
        return 10_000_000
    return 1


def best_url(urls: set[str]) -> str:
    return sorted(urls, key=lambda url: (quality_score(url), len(url)), reverse=True)[0]


def extension_for(url: str, content_type: str | None) -> str:
    parsed_ext = Path(unquote(urlparse(url).path).split("/:")[0]).suffix.lower()
    if parsed_ext in IMAGE_EXTENSIONS:
        return ".jpg" if parsed_ext == ".jpeg" else parsed_ext
    if content_type:
        guessed = mimetypes.guess_extension(content_type.split(";", 1)[0].strip().lower())
        if guessed:
            return ".jpg" if guessed in {".jpe", ".jpeg"} else guessed
    return ".bin"


def parse_sitemap(url: str) -> list[str]:
    try:
        body, _, _ = fetch(url)
    except Exception as exc:
        print(f"warn: sitemap fetch failed {url}: {exc}")
        return []
    try:
        root = ElementTree.fromstring(body)
    except ElementTree.ParseError:
        return []

    urls: list[str] = []
    for loc in root.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc"):
        if not loc.text:
            continue
        loc_url = loc.text.strip()
        if loc_url.endswith(".xml"):
            urls.extend(parse_sitemap(loc_url))
        else:
            urls.append(loc_url)
    return urls


def collect_pages(start_url: str) -> list[str]:
    pages = [start_url.rstrip("/") + "/"]
    pages.extend(parse_sitemap(urljoin(start_url, "/sitemap.xml")))
    seen: set[str] = set()
    ordered: list[str] = []
    for page in pages:
        normalized = page.split("#", 1)[0]
        parsed = urlparse(normalized)
        if parsed.netloc == "felfer.com.mx" and normalized not in seen:
            seen.add(normalized)
            ordered.append(normalized)
    return ordered


def collect_candidates(pages: list[str]) -> dict[tuple[str, str], Candidate]:
    candidates: dict[tuple[str, str], Candidate] = {}
    order = 0
    for page in pages:
        print(f"scan: {page}")
        try:
            body, _, final_url = fetch(page)
        except Exception as exc:
            print(f"warn: page fetch failed {page}: {exc}")
            continue

        parser = CuratedHTMLParser(final_url)
        parser.feed(body.decode("utf-8", errors="ignore"))
        for urls, folder, label, context in parser.images:
            usable_urls = [url for url in urls if looks_like_image_url(url)]
            if not usable_urls:
                continue
            if add_candidate(candidates, folder, asset_key(usable_urls[0]), usable_urls, final_url, context, label, order + 1):
                order += 1
            if folder.startswith("projects/"):
                obra_label = f"obra-destacada-{page_slug(final_url)}"
                if add_candidate(
                    candidates,
                    "home/obras",
                    asset_key(usable_urls[0]),
                    usable_urls,
                    final_url,
                    f"{context} home-obras-alias",
                    obra_label,
                    order + 1,
                ):
                    order += 1
    return candidates


def prune_repeated_site_assets(candidates: dict[tuple[str, str], Candidate]) -> dict[tuple[str, str], Candidate]:
    repeated_folders = {"brand", "icons", "home/hero", "home/about", "home/clients"}
    repeated_keys = {
        candidate.key
        for candidate in candidates.values()
        if candidate.folder in repeated_folders
    }
    service_hero_folders = {
        candidate.folder
        for candidate in candidates.values()
        if candidate.folder.startswith("services/") and candidate.folder.endswith("/hero")
    }
    pruned: dict[tuple[str, str], Candidate] = {}
    for key, candidate in candidates.items():
        is_repeated = candidate.key in repeated_keys
        is_project_or_obras = candidate.folder.startswith("projects/") or candidate.folder == "home/obras"
        is_service_gallery = candidate.folder.startswith("services/") and candidate.folder.endswith("/gallery")
        if is_repeated and (is_project_or_obras or is_service_gallery):
            if is_service_gallery:
                hero_folder = candidate.folder.removesuffix("/gallery") + "/hero"
                if hero_folder not in service_hero_folders:
                    fallback = Candidate(
                        key=candidate.key,
                        urls=set(candidate.urls),
                        source_pages=set(candidate.source_pages),
                        contexts={f"{context} service-hero-fallback" for context in candidate.contexts},
                        folder=hero_folder,
                        label=f"hero-{page_slug_from_folder(hero_folder)}-{asset_slug(best_url(candidate.urls))}",
                        order=candidate.order,
                    )
                    pruned[(hero_folder, candidate.key)] = fallback
                    service_hero_folders.add(hero_folder)
            continue
        if candidate.folder == "__skip__":
            continue
        pruned[key] = candidate
    return pruned


def add_candidate(
    candidates: dict[tuple[str, str], Candidate],
    folder: str,
    key_value: str,
    urls: list[str],
    page_url: str,
    context: str,
    label: str,
    order: int,
) -> bool:
    key = (folder, key_value)
    created = key not in candidates
    if key not in candidates:
        candidates[key] = Candidate(key=key_value, folder=folder, label=label, order=order)
    item = candidates[key]
    item.urls.update(urls)
    item.source_pages.add(page_url)
    item.contexts.add(context)
    return created


def unique_filename(folder_counts: dict[str, int], folder: str, label: str, ext: str) -> str:
    folder_counts[folder] = folder_counts.get(folder, 0) + 1
    prefix = folder_counts[folder]
    return f"{prefix:02d}-{slugify(label)}{ext}"


def write_readme(output: Path, manifest: dict[str, object]) -> None:
    folders = manifest["folders"]
    lines = [
        "# FELFER scraped image library",
        "",
        "Curated image set from https://felfer.com.mx/.",
        "",
        "## Folders",
        "",
    ]
    for folder, count in sorted(folders.items()):
        lines.append(f"- `{folder}/`: {count} image(s)")
    lines.extend(
        [
            "",
            "## Notes",
            "",
            "- Variants from `srcset` and GoDaddy resize transforms were deduplicated.",
            "- `manifest.json` maps every local file to source page, source URL, context, and content hash.",
            "- Use `home/hero`, `home/clients`, and `home/obras` as the primary homepage asset pools.",
            "",
        ]
    )
    (output / "README.md").write_text("\n".join(lines), encoding="utf-8")


def download_curated(candidates: dict[tuple[str, str], Candidate], output: Path) -> dict[str, object]:
    if output.exists():
        shutil.rmtree(output)
    output.mkdir(parents=True)

    images: list[dict[str, object]] = []
    failures: list[dict[str, object]] = []
    seen_hashes: dict[str, str] = {}
    seen_hashes_by_folder: dict[str, set[str]] = {}
    folder_counts: dict[str, int] = {}

    for candidate in sorted(candidates.values(), key=lambda item: item.order):
        url = best_url(candidate.urls)
        try:
            body, headers, final_url = fetch(url)
        except Exception as exc:
            failures.append(
                {
                    "url": url,
                    "folder": candidate.folder,
                    "label": candidate.label,
                    "error": str(exc),
                    "sourcePages": sorted(candidate.source_pages),
                    "contexts": sorted(candidate.contexts),
                }
            )
            print(f"fail: {candidate.folder}/{candidate.label}: {exc}")
            continue

        content_hash = hashlib.sha256(body).hexdigest()
        if content_hash in seen_hashes_by_folder.setdefault(candidate.folder, set()):
            print(f"skip duplicate in folder: {candidate.folder}/{candidate.label}")
            continue

        content_type = headers.get("content-type", "")
        ext = extension_for(final_url, content_type)
        folder = output / candidate.folder
        folder.mkdir(parents=True, exist_ok=True)
        filename = unique_filename(folder_counts, candidate.folder, candidate.label, ext)
        local_path = folder / filename
        local_path.write_bytes(body)
        rel_path = str(local_path.relative_to(output))
        duplicate_of = seen_hashes.get(content_hash)
        seen_hashes[content_hash] = rel_path
        seen_hashes_by_folder[candidate.folder].add(content_hash)

        image_entry = {
            "localPath": rel_path,
            "folder": candidate.folder,
            "label": slugify(candidate.label),
            "url": url,
            "finalUrl": final_url,
            "sourcePages": sorted(candidate.source_pages),
            "contexts": sorted(candidate.contexts),
            "assetKey": candidate.key,
            "contentType": content_type,
            "bytes": len(body),
            "sha256": content_hash,
        }
        if duplicate_of:
            image_entry["duplicateOf"] = duplicate_of
        images.append(image_entry)
        print(f"saved: {rel_path}")
        time.sleep(0.04)

    folders: dict[str, int] = {}
    for image in images:
        folder = str(image["folder"])
        folders[folder] = folders.get(folder, 0) + 1

    return {
        "downloaded": len(images),
        "failed": len(failures),
        "folders": folders,
        "images": images,
        "failures": failures,
    }


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("url", default="https://felfer.com.mx/", nargs="?")
    parser.add_argument("--output", default="scrapped-images")
    args = parser.parse_args()

    source = args.url.rstrip("/") + "/"
    pages = collect_pages(source)
    candidates = prune_repeated_site_assets(collect_candidates(pages))
    output = Path(args.output)
    result = download_curated(candidates, output)
    manifest = {
        "source": args.url,
        "pages": pages,
        "candidateGroups": len(candidates),
        **result,
    }
    (output / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    write_readme(output, manifest)
    print(f"done: {output}/manifest.json")


if __name__ == "__main__":
    main()
