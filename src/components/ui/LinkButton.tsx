import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/ui/cn';

type LinkButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type LinkButtonSize = 'sm' | 'md' | 'lg';

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: LinkButtonVariant;
  size?: LinkButtonSize;
  className?: string;
  external?: boolean;
  'aria-label'?: string;
}

const variantStyles: Record<LinkButtonVariant, string> = {
  primary:
    'bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white shadow-lg shadow-[var(--color-accent-glow,rgba(99,102,241,0.3))]',
  secondary:
    'bg-[var(--color-elevated)] hover:bg-[var(--color-hover)] text-[var(--color-text-secondary)] border border-[var(--color-border)]',
  ghost:
    'bg-transparent hover:bg-[var(--color-elevated)] text-[var(--color-muted)] hover:text-[var(--color-text)]',
  outline:
    'bg-transparent border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent-glow,rgba(99,102,241,0.1))]',
};

const sizeStyles: Record<LinkButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export function LinkButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external = false,
  'aria-label': ariaLabel,
}: LinkButtonProps) {
  const cls = cn(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]',
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
