import type { ImageMetadata } from "astro";

interface ContentImage {
  src: string;
  alt: string;
  caption?: string;
  position?: string;
}

interface ResolvedContentImage extends Omit<ContentImage, "src"> {
  src: ImageMetadata;
}

const contentImages = import.meta.glob<ImageMetadata>(
  "/src/content/**/*.{avif,gif,jpeg,jpg,png,webp}",
  { eager: true, import: "default" },
);

export function resolveContentImages(
  contentDirectory: string,
  images: ContentImage[],
): ResolvedContentImage[] {
  const directory = contentDirectory.replace(/^\/+|\/+$/g, "");

  return images.map(({ src, ...image }) => {
    const filename = src.replace(/^\.\//, "");
    const path = `/src/content/${directory}/${filename}`;
    const metadata = contentImages[path];

    if (!metadata) {
      throw new Error(`Could not find content image: ${path}`);
    }

    return { ...image, src: metadata };
  });
}
