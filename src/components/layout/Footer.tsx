import type { Socials } from '@/lib/types';
import { SocialIcons } from '@/components/ui/SocialIcons';

interface FooterProps {
  author: string;
  socials: Socials;
}

/**
 * Site footer — copyright and social links.
 */
export function Footer({ author, socials }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-[var(--color-faint)] text-center sm:text-left">
            &copy; {year} {author}. All rights reserved.
          </p>

          {/* Social icons */}
          <SocialIcons socials={socials} size="sm" />
        </div>
      </div>
    </footer>
  );
}
