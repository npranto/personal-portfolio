import type { Socials } from '@/lib/types';
import { SocialIcons } from '@/components/ui/SocialIcons';
import Link from 'next/link';

interface FooterProps {
  author: string;
  socials: Socials;
}

const footerLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Blog', href: '/blog' },
];

/**
 * Site footer — copyright, social links, and page links.
 */
export function Footer({ author, socials }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              className="flex flex-wrap gap-4 justify-center sm:justify-start"
              role="list"
            >
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs text-[var(--color-faint)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social icons */}
          <SocialIcons socials={socials} size="sm" />
        </div>

        {/* Copyright */}
        <p className="text-xs text-[var(--color-faint)] text-center sm:text-left mt-4">
          &copy; {year} {author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
