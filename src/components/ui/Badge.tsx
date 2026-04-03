import { ReactNode } from 'react';

type BadgeVariant = 'default' | 'accent' | 'highlight' | 'outline';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:
    'bg-[var(--color-elevated)] text-[var(--color-muted)] border border-[var(--color-border)]',
  accent:
    'bg-[var(--color-accent-glow,rgba(99,102,241,0.15))] text-[var(--color-accent-light)] border border-[var(--color-accent-dark)]',
  highlight:
    'bg-[var(--color-highlight-bg)] text-[var(--color-highlight)] border border-[var(--color-highlight)]',
  outline:
    'bg-transparent text-[var(--color-muted)] border border-[var(--color-border)]',
};

/**
 * Small pill badge for tech tags, labels, and status indicators.
 * Use `variant="accent"` for primary tags and `variant="highlight"` for "current" indicators.
 */
export function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
