import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/static';

export default defineConfig({
  integrations: [mdx()],
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
