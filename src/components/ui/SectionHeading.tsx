interface SectionHeadingProps {
  /** Main section title */
  title: string;
  /** Optional subtitle shown below the title */
  subtitle?: string;
  /** Alignment. Defaults to left-aligned. */
  align?: 'left' | 'center';
  className?: string;
}

/**
 * Consistent heading treatment for every portfolio section.
 * Includes an accent-colored decorator line and an optional subtitle.
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-10 ${isCenter ? 'text-center' : ''} ${className}`}>
      {/* Decorative overline */}
      <div
        className={`flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : ''}`}
      >
        <span
          className="block h-px w-8 bg-[var(--color-accent)]"
          aria-hidden="true"
        />
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-accent)]">
          {title}
        </span>
        <span
          className="block h-px w-8 bg-[var(--color-accent)]"
          aria-hidden="true"
        />
      </div>

      {/* Main heading */}
      <h2
        className={`text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight ${isCenter ? '' : ''}`}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="mt-3 text-base text-[var(--color-muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
