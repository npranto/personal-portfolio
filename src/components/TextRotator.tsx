'use client';

interface TextRotatorProps {
  /** List of strings to cycle through */
  items: string[];
  className?: string;
}

/**
 * Animates a vertical list of strings sliding upward in a fixed-height viewport,
 * creating a ticker/slot-machine effect for cycling role titles.
 * The CSS animation is defined in globals.css (.text-rotator-track / @keyframes slide-up).
 */
export function TextRotator({ items, className = '' }: TextRotatorProps) {
  if (!items || items.length === 0) return null;

  return (
    <div
      className={`h-[2.25rem] overflow-hidden ${className}`}
      aria-label={`Roles: ${items.join(', ')}`}
      role="text"
    >
      {/* The track slides upward, showing one item at a time */}
      <ul
        className="text-rotator-track list-none m-0 p-0"
        style={{
          animation: 'var(--motion-ok, slide-up 12s ease-in-out infinite)',
        }}
        aria-hidden="true"
      >
        {/* Duplicate first item at end so the loop feels seamless */}
        {[...items, items[0]].map((item, idx) => (
          <li
            key={`${item}-${idx}`}
            className="flex items-center h-[2.25rem] text-lg md:text-xl font-semibold text-[var(--color-accent-light)]"
          >
            <span
              className="mr-2 text-[var(--color-accent)]"
              aria-hidden="true"
            >
              {'/ /'}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
