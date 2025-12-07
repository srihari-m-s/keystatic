import { fields, singleton } from "@keystatic/core";
import type { ContentComponent } from "@keystatic/core/content-components";

export interface PageSingletonOptions {
  label: string;
  path: string;
  imageDirectory: string;
  imagePublicPath: string;
  components: Record<string, ContentComponent>;
}

export function createPageSingleton(options: PageSingletonOptions) {
  const { label, path, imageDirectory, imagePublicPath, components } = options;

  return singleton({
    label,
    path,
    format: { data: "yaml", contentField: "content" },
    schema: {
      title: fields.text({
        label: "Page Title",
        description: "Main title for the index page",
      }),
      description: fields.text({
        label: "Description",
        description: "Brief description or tagline for the page",
      }),
      content: fields.markdoc({
        label: "Content",
        options: {
          image: {
            directory: imageDirectory,
            publicPath: imagePublicPath,
          },
        },
        components,
      }),
    },
    entryLayout: "content",
  });
}
