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
