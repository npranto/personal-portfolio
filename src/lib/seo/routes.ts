import { getSiteUrl } from '@/lib/utils/url';

export const routes = {
  home: '/',
  projects: '/projects',
  project: (slug: string) => `/projects/${slug}`,
  experience: '/experience',
  skills: '/skills',
  blog: '/blog',
} as const;

export function canonicalUrl(path: string): string {
  return `${getSiteUrl()}${path}`;
}
