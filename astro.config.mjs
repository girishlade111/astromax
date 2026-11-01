import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  // GitHub Pages project site: https://girishlade111.github.io/astromax/
  site: 'https://girishlade111.github.io',
  base: '/astromax',
  compressHTML: true,
  integrations: [sitemap()]
});