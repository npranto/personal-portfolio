import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { personJsonLd, websiteJsonLd } from '@/lib/seo/structured-data';
import type { BrandTheme, SiteConfig } from '@/lib/types';
import configData from '@/content/config.json';

const brandTheme: BrandTheme = (configData as SiteConfig).theme ?? 'default';

/**
 * Runs synchronously before React hydration to prevent a flash of the wrong
 * theme. Reads localStorage first; falls back to the OS prefers-color-scheme.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export const metadata: Metadata = {
  title: 'Nazmuz (Shakib) Pranto — Senior Frontend Engineer',
  description:
    'Portfolio of Nazmuz (Shakib) Pranto, a senior frontend engineer based in Boston, MA. 7+ years building React, Next.js, TypeScript, and high-performance eCommerce web applications.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  ),
  openGraph: {
    type: 'website',
    title: 'Nazmuz (Shakib) Pranto — Senior Frontend Engineer',
    description:
      'Senior frontend engineer based in Boston, MA. Specializing in React, Next.js, TypeScript, eCommerce platforms, and high-performance web applications.',
    siteName: 'Shakib Pranto',
    images: [
      {
        url: '/assets/images/profile-v4-500x500.jpg',
        width: 500,
        height: 500,
        alt: 'Nazmuz (Shakib) Pranto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nazmuz (Shakib) Pranto — Senior Frontend Engineer',
    description:
      'Senior frontend engineer based in Boston, MA — React, Next.js, TypeScript, eCommerce.',
    creator: '@nazmuzpranto',
    images: ['/assets/images/profile-v4-500x500.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/assets/favicons/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/assets/favicons/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/assets/favicons/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      { url: '/assets/favicons/favicon.ico' },
    ],
    apple: [
      { url: '/assets/favicons/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/assets/favicons/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/assets/favicons/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/assets/favicons/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/assets/favicons/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/assets/favicons/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/assets/favicons/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/assets/favicons/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/assets/favicons/apple-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'msapplication-TileImage',
        url: '/assets/favicons/ms-icon-144x144.png',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
  other: {
    'msapplication-TileColor': '#6366f1',
    'msapplication-config': '/assets/favicons/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
      data-brand-theme={brandTheme}
    >
      <head>
        {/* Anti-flash: sets data-theme before React hydrates */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        {/* Structured data */}
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {/* Accessibility: skip past the navbar for keyboard users */}
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
