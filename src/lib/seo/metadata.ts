import type { Metadata } from 'next';
import { getSiteUrl } from '@/lib/utils/url';

const SITE_NAME = 'Nazmuz (Shakib) Pranto — Frontend Engineer';
const DEFAULT_DESCRIPTION =
  'Portfolio of Nazmuz (Shakib) Pranto, a senior frontend engineer based in Boston, MA. Specializing in React, Next.js, TypeScript, eCommerce platforms, and high-performance web applications.';

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonical = `${siteUrl}${path}`;
  const fullTitle = title ? `${title} — Shakib Pranto` : SITE_NAME;
  const image = ogImage ?? `${siteUrl}/assets/images/profile-v4-500x500.jpg`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      url: canonical,
      title: fullTitle,
      description,
      siteName: 'Shakib Pranto',
      images: [{ url: image, width: 500, height: 500, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@nazmuzpranto',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
