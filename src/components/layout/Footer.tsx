import type { Socials } from '@/lib/types';
import { SocialIcons } from '@/components/ui/SocialIcons';

interface FooterProps {
  author: string;
  socials: Socials;
}

/**
 * Site footer — copyright.
 */
export function Footer({ author, socials }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <SocialIcons socials={socials} size="sm" />
        {/* Copyright */}
        <p className="text-xs text-[var(--color-faint)] order-2 sm:order-1">
          &copy; {year} {author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
