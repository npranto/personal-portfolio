import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/lib/utils/url';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dev/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
