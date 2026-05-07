import Link from 'next/link';
import navData from '@/content/nav.json';
import socialsData from '@/content/socials.json';
import type { NavContent, SocialsContent } from '@/lib/types';
import { SocialIcons } from '@/components/ui/SocialIcons';

const { nav } = navData as NavContent;
const { socials } = socialsData as SocialsContent;

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center"
      aria-label="Page not found"
    >
      <div className="card max-w-2xl w-full p-8 sm:p-10">
        <div
          className="text-8xl font-extrabold gradient-text mb-4 select-none"
          aria-hidden="true"
        >
          404
        </div>
        <h1 className="text-2xl font-bold text-[var(--color-text)] mb-2">
          Page not found
        </h1>
        <p className="text-[var(--color-muted)] mb-8 max-w-md mx-auto">
          That page does not exist anymore, but you can jump back into the
          portfolio or find me elsewhere.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-dark)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
          >
            Go home
          </Link>

          <nav aria-label="Portfolio sections">
            <ul
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
              role="list"
            >
              {nav.links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={`/${link.href}`}
                    className="inline-flex rounded-lg border border-[var(--color-border)] px-2 py-1 text-sm font-medium text-[var(--color-muted)] transition-colors hover:border-[var(--color-accent-dark)] hover:text-[var(--color-accent-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <SocialIcons
            socials={socials}
            size="md"
            className="justify-center pt-1"
          />
        </div>
      </div>
    </main>
  );
}
