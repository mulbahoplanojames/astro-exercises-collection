// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import typography from "@tailwindcss/typography";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // markdown: {
  //   syntaxHighlight: false,
  // },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [mdx()],
});