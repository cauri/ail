// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import { remarkBaseLinks } from './src/plugins/remark-base-links.mjs';

const basePath = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: basePath,
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    remarkPlugins: [[remarkBaseLinks, { base: basePath }]],
  },
  integrations: [mdx()]
});
