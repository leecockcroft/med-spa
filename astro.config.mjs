// @ts-check
import { defineConfig } from 'astro/config';
import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://massageartestepona.com', 
  integrations: [
    jopSoftwarecookieconsent(),
    sitemap()
  ]
});
