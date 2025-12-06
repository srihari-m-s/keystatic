// @ts-ignore
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdoc", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string().optional()),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdoc", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    avatar: z.string().optional(),
  }),
});

const navbar = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdoc", base: "./src/content/navbar" }),
  schema: z.object({
    profileImage: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })),
  }),
});

const indexPage = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdoc", base: "./src/content/index-page" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const socialLinks = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdoc", base: "./src/content/social-links" }),
  schema: z.object({
    linkedin: z.string().optional(),
  }),
});

export const collections = { posts, authors, navbar, indexPage, socialLinks };
