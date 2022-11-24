import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import katex from 'astro-katex';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    katex(),
  ],
  markdown: {
    remarkPlugins: ['remark-math'],
    rehypePlugins: [
      [
        'rehype-katex',
        {
          // Katex plugin options
        },
      ],
    ],
  },
  site: 'https://astro.grepwise.com',
});
