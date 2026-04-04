import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

/**
 * Runs synchronously before React hydration to prevent a flash of the wrong
 * theme. Reads localStorage first; falls back to the OS prefers-color-scheme.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export const metadata: Metadata = {
  title: 'Nazmuz (Shakib) Pranto — Frontend Engineer',
  description:
    'Portfolio of Nazmuz (Shakib) Pranto, a frontend software engineer based in Boston, MA. Specializing in React, Next.js, TypeScript, and high-performance web applications.',
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
