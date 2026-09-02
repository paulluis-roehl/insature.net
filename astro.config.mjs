import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeTemml from "./src/lib/rehype-temml.js";

export default defineConfig({
  site: "https://insature.net",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeTemml],
    }),
  },
});
