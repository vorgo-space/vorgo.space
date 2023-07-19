import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  experimental: {
    assets: true,
  },
  integrations: [tailwind()],
});
