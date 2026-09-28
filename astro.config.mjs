import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL e BASE_PATH vêm do ambiente. No GitHub Pages o workflow define
// BASE_PATH=/mt-metal; em domínio próprio, deixe BASE_PATH vazio.
export default defineConfig({
  site: process.env.SITE_URL || 'https://syncdobololo.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  devToolbar: { enabled: false },
});
