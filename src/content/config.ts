// @ts-ignore
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string().optional()),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
  }),
});

const navbar = defineCollection({
  schema: z.object({
    profileImage: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
});

export const collections = { posts, authors, navbar };
