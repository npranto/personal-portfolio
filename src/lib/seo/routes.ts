import { getSiteUrl } from '@/lib/utils/url';

export const routes = {
  home: '/',
  about: '/#about',
  experience: '/#experience',
  projects: '/#projects',
  content: '/#content',
  education: '/#education',
  contact: '/#contact',
} as const;

export function canonicalUrl(path: string): string {
  return `${getSiteUrl()}${path}`;
}
