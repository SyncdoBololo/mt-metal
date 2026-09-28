import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({site:process.env.SITE_URL || 'https://mt-metal-arco.marcosalves-blv.chatgpt.site',output:'static',integrations:[sitemap()],prefetch:{prefetchAll:true,defaultStrategy:'hover'},devToolbar:{enabled:false}});

