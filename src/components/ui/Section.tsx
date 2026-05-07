import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';

interface SectionProps {
  id: string;
  label: string;
  children: ReactNode;
  alternate?: boolean;
}

export function Section({ id, label, children, alternate }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${alternate ? 'section-alt' : ''}`}
      aria-label={label}
    >
      <Container>{children}</Container>
    </section>
  );
}
