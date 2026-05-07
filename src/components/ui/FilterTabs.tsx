interface FilterTabsProps<T extends string> {
  options: { value: T; label: string }[];
  selected: T;
  onSelect: (value: T) => void;
}

export function FilterTabs<T extends string>({
  options,
  selected,
  onSelect,
}: FilterTabsProps<T>) {
  return (
    <div
      role="tablist"
      aria-label="Project filters"
      className="flex flex-wrap gap-2"
    >
      {options.map((option) => {
        const active = option.value === selected;
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={active}
            className={`rounded-full px-3 py-1.5 text-sm border transition-colors ${
              active
                ? 'border-[var(--color-accent)] text-[var(--color-accent-light)]'
                : 'border-[var(--color-border)] text-[var(--color-muted)] hover:text-[var(--color-text)]'
            }`}
            onClick={() => onSelect(option.value)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
