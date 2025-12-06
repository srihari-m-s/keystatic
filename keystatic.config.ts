import { config, fields, collection, singleton } from "@keystatic/core";
import { indexPageSingleton } from "@/blocks/index-page";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      entryLayout: "content",
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
      format: { data: "yaml", contentField: "markdoc" },
      schema: {
        markdoc: fields.emptyContent({ extension: "mdoc" }),
        name: fields.slug({ name: { label: "Name" } }),
        avatar: fields.image({
          label: "Avatar",
          directory: "src/assets/images/authors",
        }),
      },
    }),
  },
  singletons: {
    socialLinks: singleton({
      label: "Social Links",
      path: "src/content/social-links/",
      format: { data: "yaml", contentField: "markdoc" },
      schema: {
        markdoc: fields.emptyContent({ extension: "mdoc" }),
        linkedin: fields.text({
          label: "LinkedIn",
          description: "The LinkedIn ID (not the full URL)",
          validation: { isRequired: false },
        }),
      },
    }),
    navbar: singleton({
      label: "Navbar",
      path: "src/content/navbar/",
      format: { data: "yaml", contentField: "markdoc" },
      schema: {
        markdoc: fields.emptyContent({ extension: "mdoc" }),
        // Profile image shown on the left and linked to home
        profileImage: fields.image({
          label: "Profile Image",
          directory: "src/assets/images/site",
          publicPath: "/src/assets/images/site",
          validation: { isRequired: false },
        }),
        // Links shown in the navbar
        links: fields.array(
          fields.object({
            label: fields.text({ label: "Label" }),
            href: fields.text({ label: "Href" }),
          }),
          {
            label: "Links",
            itemLabel: (item) => item.fields.label.value,
            validation: {
              length: { min: 1 },
            },
          }
        ),
      },
    }),
    indexPage: indexPageSingleton,
  },
});
