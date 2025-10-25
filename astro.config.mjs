// @ts-check
import { defineConfig } from 'astro/config';
import jopSoftwarecookieconsent from '@jop-software/astro-cookieconsent';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://massageartestepona.com',
  build: {
    assets: '_astro', // Ensures consistent asset pathing
  },
  integrations: [
    jopSoftwarecookieconsent(),
    sitemap()
  ]
});
