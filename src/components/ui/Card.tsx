import { ReactNode } from 'react';
import { cn } from '@/lib/ui/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Slightly elevated surface. */
  elevated?: boolean;
  /** Add hover border / shadow glow effect. */
  hoverable?: boolean;
  as?: 'div' | 'article' | 'section' | 'li';
}

export function Card({
  children,
  className,
  elevated = false,
  hoverable = false,
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={cn(
        elevated ? 'card-elevated' : 'card',
        hoverable &&
          'hover:border-[var(--color-accent-dark)] hover:shadow-xl hover:shadow-[var(--color-accent-glow,rgba(99,102,241,0.1))] transition-all duration-300',
        className
      )}
    >
      {children}
    </Tag>
  );
}
