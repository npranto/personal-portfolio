'use client';

interface FilterTab<T extends string> {
  value: T;
  label: string;
  count?: number;
}

interface FilterTabsProps<T extends string> {
  tabs: FilterTab<T>[];
  active: T;
  onChange: (value: T) => void;
  label?: string;
  className?: string;
}

export function FilterTabs<T extends string>({
  tabs,
  active,
  onChange,
  label = 'Filter',
  className = '',
}: FilterTabsProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className={`flex flex-wrap gap-2 ${className}`}
    >
      {tabs.map((tab) => {
        const isActive = tab.value === active;
        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => onChange(tab.value)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]
              ${
                isActive
                  ? 'bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent-glow,rgba(99,102,241,0.3))]'
                  : 'bg-[var(--color-elevated)] text-[var(--color-muted)] border border-[var(--color-border)] hover:text-[var(--color-text)] hover:border-[var(--color-accent-dark)]'
              }`}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-[var(--color-bg)] text-[var(--color-faint)]'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
