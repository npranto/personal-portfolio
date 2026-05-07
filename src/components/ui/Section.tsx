import { ReactNode } from 'react';
import { cn } from '@/lib/ui/cn';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Alternate surface background. */
  alt?: boolean;
  'aria-label'?: string;
}

export function Section({
  children,
  id,
  className,
  alt = false,
  'aria-label': ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('section-padding', alt && 'section-alt', className)}
    >
      {children}
    </section>
  );
}
