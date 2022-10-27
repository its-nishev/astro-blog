import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes"

export default defineConfig({
  site: 'https://example.com',
  integrations: [sitemap(), react(), image(), tailwind()]
});