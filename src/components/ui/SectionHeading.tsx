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
      {/* Main heading */}
      <h2
        className={`text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight ${isCenter ? '' : ''}`}
      >
        {title}
      </h2>

      {/* Optional subtitle */}
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--color-faint)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
