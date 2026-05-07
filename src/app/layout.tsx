import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SkipLink } from '@/components/ui/SkipLink';
import {
  personStructuredData,
  websiteStructuredData,
} from '@/lib/seo/structured-data';

/**
 * Runs synchronously before React hydration to prevent a flash of the wrong
 * theme. Reads localStorage first; falls back to the OS prefers-color-scheme.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL('https://npranto.dev'),
  title: {
    default: 'Nazmuz (Shakib) Pranto — Senior Frontend Engineer',
    template: '%s | npranto.dev',
  },
  description:
    'Senior frontend engineer portfolio focused on scalable product experiences, eCommerce systems, accessibility, and web performance.',
  openGraph: {
    title: 'Nazmuz (Shakib) Pranto — Senior Frontend Engineer',
    description:
      'Case studies, work history, and writing focused on frontend architecture, product engineering, and performance.',
    url: 'https://npranto.dev',
    siteName: 'npranto.dev',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nazmuz (Shakib) Pranto — Senior Frontend Engineer',
    description:
      'Case studies and frontend engineering work across product, eCommerce, and platform teams.',
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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      {/* Anti-flash: sets data-theme before React hydrates */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SkipLink />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
