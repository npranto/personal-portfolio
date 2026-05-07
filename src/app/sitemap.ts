import type { MetadataRoute } from 'next';
import { loadPortfolioContent } from '@/lib/content/loaders';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://npranto.dev';
  const projects = loadPortfolioContent().projects.items.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    ...projects,
  ];
}
