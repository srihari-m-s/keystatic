const CONTENT_IMAGE_GLOB =
  "/src/assets/**/*.{jpeg,jpg,png,gif,webp,avif,svg}" as const;

const contentImages = import.meta.glob<{ default: ImageMetadata }>(
  CONTENT_IMAGE_GLOB
);

export type ContentImageLoader = () => Promise<{ default: ImageMetadata }>;

export function getContentImageLoader(imagePath: string): ContentImageLoader {
  const loader = contentImages[imagePath];

  if (!loader) {
    throw new Error(
      `"${imagePath}" does not exist in glob: "${CONTENT_IMAGE_GLOB}"`
    );
  }

  return loader;
}
