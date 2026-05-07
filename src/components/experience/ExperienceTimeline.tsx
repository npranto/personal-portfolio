import type { RichWorkItem } from '@/lib/content/types';
import { ExperienceCard } from './ExperienceCard';
import { EmptyState } from '@/components/ui/EmptyState';

interface ExperienceTimelineProps {
  items: RichWorkItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  if (!items || items.length === 0) {
    return (
      <EmptyState
        title="No experience listed"
        description="Work history will appear here."
      />
    );
  }

  return (
    <ol className="relative" aria-label="Work history">
      {items.map((job, idx) => (
        <ExperienceCard
          key={job.id}
          job={job}
          isLast={idx === items.length - 1}
        />
      ))}
    </ol>
  );
}
