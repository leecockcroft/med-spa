// @ts-check
import { defineConfig } from 'astro/config';
import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://massageartestepona.com', // replace with your actual domain
  integrations: [
    jopSoftwarecookieconsent(),
    sitemap()
  ]
});
