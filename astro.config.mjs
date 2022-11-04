import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";
import Analytics from "@vercel/analytics"

export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold font-gt',
          h2: 'text-2xl font-bold font-gt',
          h3: 'text-xl font-bold font-gt',
          h4: 'text-lg font-bold font-gt',
          h5: 'font-bold font-gt',
          h6: 'font-bold font-gt',
          img: 'border border-slate-300 dark:border-zinc-700 rounded-xl mb-6',
          p: 'mb-6 font-gt',
          a: 'underline underline-offset-2 hover:text-orange-500 decoration-orange-500 font-gt'
        }
      ]
    ]
  }
});

export default App({
  <Analytics />
});