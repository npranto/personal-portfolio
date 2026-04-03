import type { Socials } from '@/lib/types';
import { SocialIcons } from '@/components/ui/SocialIcons';

interface FooterProps {
  author: string;
  socials: Socials;
}

/**
 * Site footer — social icons row + copyright.
 */
export function Footer({ author, socials }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-xs text-[var(--color-faint)] order-2 sm:order-1">
          &copy; {year} {author}. Built with Next.js &amp; Tailwind CSS.
        </p>

        {/* Social icons */}
        <div className="order-1 sm:order-2">
          <SocialIcons socials={socials} size="sm" />
        </div>
      </div>
    </footer>
  );
}
