import type { Metric } from '@/lib/content/types';

interface ProjectMetricsProps {
  metrics: Metric[];
  className?: string;
}

export function ProjectMetrics({
  metrics,
  className = '',
}: ProjectMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <dl className={`flex flex-wrap gap-3 ${className}`}>
      {metrics.map((m) => (
        <div
          key={m.label}
          className="flex flex-col gap-0.5 bg-[var(--color-elevated)] rounded-lg px-3 py-2 border border-[var(--color-border)]"
        >
          <dt className="text-xs text-[var(--color-faint)]">{m.label}</dt>
          <dd className="text-sm font-bold text-[var(--color-accent)]">
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
