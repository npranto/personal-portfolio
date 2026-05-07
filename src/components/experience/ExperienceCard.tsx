import Image from 'next/image';
import type { RichExperienceItem } from '@/lib/content/types';
import { Badge } from '@/components/ui/Badge';
import { ProjectTechStack } from '@/components/projects/ProjectTechStack';

interface ExperienceCardProps {
  job: RichExperienceItem;
  isLast?: boolean;
}

export function ExperienceCard({ job, isLast = false }: ExperienceCardProps) {
  return (
    <li
      className={`relative flex gap-6 md:gap-10 ${!isLast ? 'pb-12' : ''}`}
      aria-current={job.isCurrent ? 'true' : undefined}
    >
      {/* Timeline dot + connector */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 z-10
            ${
              job.isCurrent
                ? 'border-[var(--color-accent)] bg-[var(--color-accent-glow,rgba(99,102,241,0.15))]'
                : 'border-[var(--color-border)] bg-[var(--color-surface)]'
            }`}
          aria-hidden="true"
        >
          {job.image.sm ? (
            <Image
              src={`${job.image.sm}.webp`}
              alt=""
              width={28}
              height={28}
              className="rounded-md object-contain"
              loading="lazy"
              sizes="28px"
            />
          ) : (
            <span className="text-xs font-bold text-[var(--color-accent)]">
              {job.company.charAt(0)}
            </span>
          )}
        </div>
        {!isLast && (
          <div
            className="w-0.5 flex-1 mt-2 bg-gradient-to-b from-[var(--color-border)] to-transparent"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 card p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h2 className="text-base md:text-lg font-bold text-[var(--color-text)]">
                {job.position}
              </h2>
              {job.isCurrent && <Badge variant="highlight">Current</Badge>}
            </div>
            <p className="text-sm font-semibold text-[var(--color-accent-light)]">
              {job.company}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-xs text-[var(--color-muted)]">{job.duration}</p>
            <p className="text-xs text-[var(--color-faint)]">
              {job.location} &middot; {job.employmentType}
            </p>
          </div>
        </div>

        {/* Summary */}
        {job.summary && (
          <p className="text-sm text-[var(--color-muted)] mb-4 leading-relaxed">
            {job.summary}
          </p>
        )}

        {/* Accomplishments */}
        <ul className="space-y-2.5 mb-5" aria-label="Accomplishments">
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

        {/* Tech stack */}
        <ProjectTechStack technologies={job.technologies} />
      </div>
    </li>
  );
}
