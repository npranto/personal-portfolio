import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ id, label, className = '', ...props }: InputProps) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm text-[var(--color-muted)]">{label}</span>
      <input
        id={id}
        className={`mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ${className}`}
        {...props}
      />
    </label>
  );
}
