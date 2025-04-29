// next-sitemap.config.ts

import { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://www.tsvalterationsandformalwear.com', // 🔥 Change to your live domain
  generateRobotsTxt: true,             // ✅ Also generate robots.txt file
  sitemapSize: 7000,                   // optional, split sitemaps if too large
  changefreq: 'daily',                  // optional hint for crawlers
  priority: 0.7,                        // optional page priority
};

export default config;
