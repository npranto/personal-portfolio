interface StatCardProps {
  label: string;
  value: string;
  description?: string;
  className?: string;
}

export function StatCard({
  label,
  value,
  description,
  className = '',
}: StatCardProps) {
  return (
    <div
      className={`card p-5 flex flex-col gap-1 ${className}`}
      aria-label={`${label}: ${value}`}
    >
      <span className="text-2xl font-extrabold text-[var(--color-accent)]">
        {value}
      </span>
      <span className="text-sm font-semibold text-[var(--color-text)]">
        {label}
      </span>
      {description && (
        <span className="text-xs text-[var(--color-muted)]">{description}</span>
      )}
    </div>
  );
}
