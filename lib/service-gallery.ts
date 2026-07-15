import { readdirSync } from "node:fs";
import { join } from "node:path";

const galleryExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

export function serviceGalleryImages(slug: string, primaryImage: string) {
  const serviceDir = join(process.cwd(), "public", "images", "felfer", "services", slug);

  try {
    const folderImages = readdirSync(serviceDir, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => galleryExtensions.has(fileName.slice(fileName.lastIndexOf(".")).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, "es", { numeric: true }))
      .map((fileName) => `services/${slug}/${fileName}`);

    return [primaryImage, ...folderImages.filter((image) => image !== primaryImage)];
  } catch {
    return [primaryImage];
  }
}
