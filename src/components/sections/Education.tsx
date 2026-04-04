import type { EducationItem } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface EducationProps {
  header: string;
  items: EducationItem[];
}

function GraduationCapIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

/**
 * Education section — simple card layout for each institution.
 */
export function Education({ header, items }: EducationProps) {
  return (
    <section id="education" className="section-padding" aria-label="Education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={header}
          subtitle="Where I've formally studied and trained."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((edu) => (
            <div
              key={edu.id}
              className="card p-6 flex gap-4 group hover:border-[var(--color-accent-dark)] transition-all duration-300"
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-[var(--color-accent)]"
                style={{
                  background: 'var(--color-accent-glow, rgba(99,102,241,0.15))',
                }}
                aria-hidden="true"
              >
                <GraduationCapIcon />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent-light)] transition-colors">
                  {edu.institution}
                </h3>
                <p className="text-sm text-[var(--color-accent-light)] font-medium mt-0.5">
                  {edu.description}
                </p>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  {edu.duration} &middot; {edu.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
