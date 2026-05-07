import { InputHTMLAttributes, forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/ui/cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Hides the label visually while keeping it accessible. */
  hideLabel?: boolean;
  leftIcon?: ReactNode;
  error?: string;
  className?: string;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    hideLabel = false,
    leftIcon,
    error,
    className,
    wrapperClassName,
    id,
    ...props
  },
  ref
) {
  const inputId =
    id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  return (
    <div className={cn('flex flex-col gap-1', wrapperClassName)}>
      {label && (
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium text-[var(--color-text-secondary)]',
            hideLabel && 'sr-only'
          )}
        >
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <span
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-faint)] pointer-events-none"
            aria-hidden="true"
          >
            {leftIcon}
          </span>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full rounded-lg border bg-[var(--color-elevated)] text-[var(--color-text)]',
            'placeholder:text-[var(--color-faint)]',
            'px-3 py-2.5 text-sm',
            'border-[var(--color-border)] focus:border-[var(--color-accent)]',
            'outline-none ring-0 focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]',
            'transition-colors duration-200',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            leftIcon ? 'pl-9' : undefined,
            error ? 'border-red-500 focus:ring-red-500' : undefined,
            className
          )}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
      </div>
      {error && (
        <p
          id={`${inputId}-error`}
          className="text-xs text-red-500"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});
