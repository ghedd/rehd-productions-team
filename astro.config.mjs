// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ['images.unsplash.com', 'placehold.it'],
  },
  integrations: [mdx(), icon()]
});