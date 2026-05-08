import { ReactNode, AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/ui/cn';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
  /** Shows a small external icon after the text. */
  showIcon?: boolean;
  className?: string;
}

export function ExternalLink({
  href,
  children,
  showIcon = true,
  className,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center gap-1 hover:text-[var(--color-accent-light)] transition-colors',
        className
      )}
      {...props}
    >
      {children}
      {showIcon && (
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
          className="flex-shrink-0 opacity-70"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
        </svg>
      )}
    </a>
  );
}
