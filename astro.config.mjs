import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

const IS_DEVELOPMENT = import.meta.env.MODE === "development";
const KEYSTATIC_GITHUB_CLIENT_ID = import.meta.env
  .VITE_KEYSTATIC_GITHUB_CLIENT_ID;
const KEYSTATIC_GITHUB_CLIENT_SECRET = import.meta.env
  .VITE_KEYSTATIC_GITHUB_CLIENT_SECRET;
const KEYSTATIC_SECRET = import.meta.env.VITE_KEYSTATIC_SECRET;
const PUBLIC_KEYSTATIC_GITHUB_APP_SLUG = import.meta.env
  .VITE_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG;

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  vite: {
    resolve: {
      alias: !IS_DEVELOPMENT && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
    plugins: [tailwindcss()],
    define: {
      KEYSTATIC_GITHUB_CLIENT_ID: JSON.stringify(KEYSTATIC_GITHUB_CLIENT_ID),
      KEYSTATIC_GITHUB_CLIENT_SECRET: JSON.stringify(
        KEYSTATIC_GITHUB_CLIENT_SECRET
      ),
      KEYSTATIC_SECRET: JSON.stringify(KEYSTATIC_SECRET),
      PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: JSON.stringify(
        PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
      ),
    },
  },
  adapter: cloudflare({
    imageService: "compile",
    platformProxy: {
      enabled: true,
      configPath: "wrangler.jsonc",
      experimentalJsonConfig: true,
    },
  }),
});
