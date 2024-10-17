// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  build: {
		inlineStylesheets: "always",
	},
	compressHTML: true,
  devToolbar: {
		enabled: false,
	},
  integrations: [tailwind()],
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  }
});