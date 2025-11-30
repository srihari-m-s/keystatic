import { config, fields, collection } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*/",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/posts",
              publicPath: "../../assets/images/posts/",
            },
          },
        }),
        authors: fields.array(
          fields.relationship({
            label: "Author",
            collection: "authors",
            validation: {
              isRequired: true,
            },
          }),
          {
            label: "Authors",
            itemLabel: (item) => item.value || "Select an author",
          }
        ),
      },
    }),
    authors: collection({
      label: "Authors",
      slugField: "name",
      path: "src/content/authors/*",
      format: { data: "json" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        avatar: fields.image({
          label: "Avatar",
          directory: "src/assets/images/authors",
        }),
      },
    }),
  },
});
