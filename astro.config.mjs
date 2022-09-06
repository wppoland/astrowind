import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";

import { SITE } from "./src/config.mjs";

// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.domain,

  //icon requirement
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },

  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    [astroImageTools],
    sitemap({filter: true}),
    image(),
  ],
});
