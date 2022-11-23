import { defineConfig } from 'astro/config';
import katex  from 'astro-katex';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), katex()],
  site: 'https://akhiln28.github.io',
  base: '/loose-limb'
});