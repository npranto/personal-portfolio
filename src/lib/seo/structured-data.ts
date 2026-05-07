import { getSiteUrl } from '@/lib/utils/url';

export function personJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nazmuz (Shakib) Pranto',
    url: siteUrl,
    sameAs: [
      'https://github.com/npranto',
      'https://www.linkedin.com/in/npranto',
      'https://twitter.com/nazmuzpranto',
      'https://dev.to/npranto',
    ],
    jobTitle: 'Senior Frontend Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent',
    },
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Frontend Engineering',
      'eCommerce',
    ],
    image: `${siteUrl}/assets/images/profile-v4-500x500.jpg`,
  };
}

export function websiteJsonLd() {
  const siteUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Shakib Pranto — Frontend Engineer',
    url: siteUrl,
    description:
      'Portfolio of Nazmuz (Shakib) Pranto, a senior frontend engineer based in Boston, MA.',
    author: {
      '@type': 'Person',
      name: 'Nazmuz (Shakib) Pranto',
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
