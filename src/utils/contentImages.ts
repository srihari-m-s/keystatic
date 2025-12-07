const contentImages = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{jpeg,jpg,png,gif,webp,avif,svg}"
);

export type ContentImageLoader = () => Promise<{ default: ImageMetadata }>;

export function getContentImageLoader(imagePath: string): ContentImageLoader {
  const loader = contentImages[imagePath];

  if (!loader) {
    throw new Error(
      `"${imagePath}" does not exist in glob: "/src/assets/**/*.{jpeg,jpg,png,gif,webp,avif,svg}"`
    );
  }

  return loader;
}
