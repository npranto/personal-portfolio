import { ReactNode } from 'react';
import { cn } from '@/lib/ui/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** 'default' = max-w-6xl, 'narrow' = max-w-3xl, 'wide' = max-w-7xl */
  size?: 'narrow' | 'default' | 'wide';
}

const sizeClasses = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
};

export function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={cn(
        sizeClasses[size],
        'mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
}
