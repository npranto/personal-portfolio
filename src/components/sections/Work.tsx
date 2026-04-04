import Image from 'next/image';
import type { WorkItem } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface WorkProps {
  header: string;
  items: WorkItem[];
}

/**
 * Work experience section rendered as a vertical timeline.
 * Each entry shows: company logo, position, company name, duration/location,
 * a bullet list of accomplishments, and tech badges.
 */
export function Work({ header, items }: WorkProps) {
  return (
    <section id="work" className="section-padding" aria-label="Work experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={header}
          subtitle="Companies I've had the privilege of working with."
        />

        {/* Timeline */}
        <ol className="relative" aria-label="Work history">
          {items.map((job, idx) => (
            <li
              key={job.id}
              aria-current={job.isCurrent ? 'true' : undefined}
              className={`relative flex gap-6 md:gap-10 ${idx < items.length - 1 ? 'pb-12' : ''}`}
            >
              {/* Vertical line + dot */}
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                {/* Dot */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 z-10
                    ${
                      job.isCurrent
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent-glow,rgba(99,102,241,0.15))]'
                        : 'border-[var(--color-border)] bg-[var(--color-surface)]'
                    }`}
                  aria-hidden="true"
                >
                  <Image
                    src={`${job.image.sm}.webp`}
                    alt=""
                    width={28}
                    height={28}
                    className="rounded-md object-contain"
                    loading="lazy"
                    sizes="28px"
                  />
                </div>

                {/* Connector line between entries */}
                {idx < items.length - 1 && (
                  <div
                    className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-[var(--color-border)] to-transparent"
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Content card */}
              <div className="flex-1 card p-6 mb-0">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base md:text-lg font-bold text-[var(--color-text)]">
                        {job.position}
                      </h3>
                      {job.isCurrent && (
                        <Badge variant="highlight">Current</Badge>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[var(--color-accent-light)]">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-[var(--color-muted)]">
                      {job.duration}
                    </p>
                    <p className="text-xs text-[var(--color-faint)]">
                      {job.location} &middot; {job.employmentType}
                    </p>
                  </div>
                </div>

                {/* Accomplishment bullets */}
                <ul className="space-y-2 mb-5" aria-label="Accomplishments">
                  {job.description.map((bullet, i) => (
                    <li
                      key={`${job.id}-desc-${i}`}
                      className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]"
                    >
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                        aria-hidden="true"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Tech stack badges */}
                <div
                  className="flex flex-wrap gap-1.5"
                  aria-label="Technologies used"
                >
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
