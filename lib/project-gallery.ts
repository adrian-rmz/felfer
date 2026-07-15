import { readdirSync } from "node:fs";
import { join } from "node:path";

const galleryExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export function projectGalleryImages(slug: string) {
  const galleryDir = join(process.cwd(), "public", "images", "felfer", "projects", slug, "gallery");

  try {
    return readdirSync(galleryDir, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => galleryExtensions.has(fileName.slice(fileName.lastIndexOf(".")).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
      .map((fileName) => `projects/${slug}/gallery/${fileName}`);
  } catch {
    return [];
  }
}
