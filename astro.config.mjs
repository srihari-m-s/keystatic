import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

const IS_DEVELOPMENT = import.meta.env.MODE === "development";

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
      KEYSTATIC_GITHUB_CLIENT_ID: JSON.stringify(
        process.env.KEYSTATIC_GITHUB_CLIENT_ID
      ),
      KEYSTATIC_GITHUB_CLIENT_SECRET: JSON.stringify(
        process.env.KEYSTATIC_GITHUB_CLIENT_SECRET
      ),
      KEYSTATIC_SECRET: JSON.stringify(process.env.KEYSTATIC_SECRET),
      PUBLIC_KEYSTATIC_GITHUB_APP_SLUG: JSON.stringify(
        process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG
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
