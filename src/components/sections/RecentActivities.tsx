import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { RichRecentActivity } from '@/lib/content/types';

interface RecentActivitiesProps {
  items: RichRecentActivity[];
}

function getTypeBadgeVariant(type: RichRecentActivity['type']) {
  return type === 'video' ? 'highlight' : 'accent';
}

function getActivityLabel(type: RichRecentActivity['type']) {
  return type === 'video' ? 'Video' : 'Article';
}

export function RecentActivities({ items }: RecentActivitiesProps) {
  if (items.length === 0) return null;

  return (
    <section
      id="recent-activities"
      className="section-padding"
      aria-label="Recent activities"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Recent Activities"
          subtitle="A quick look at the latest articles and videos I published."
        />

        <ul
          role="list"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((item) => {
            const typeLabel = getActivityLabel(item.type);
            const linkLabel = `${typeLabel}: ${item.title}`;
            const parsedDate = item.publishedAt
              ? new Date(item.publishedAt)
              : undefined;
            const hasValidDate =
              parsedDate instanceof Date && !Number.isNaN(parsedDate.getTime());

            return (
              <li key={`${item.type}-${item.id}`} className="h-full">
                <article className="flex h-full flex-col gap-3 rounded-xl border border-(--color-border-subtle) bg-surface p-5">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant={getTypeBadgeVariant(item.type)}>
                      {typeLabel}
                    </Badge>
                    {item.publishedAt && (
                      <time
                        dateTime={
                          hasValidDate ? parsedDate.toISOString() : undefined
                        }
                        className="text-xs text-(--color-faint)"
                      >
                        {item.publishedAt}
                      </time>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold leading-tight text-text">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={linkLabel}
                      className="rounded-sm hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
                    >
                      {item.title}
                    </a>
                  </h3>

                  {item.description && (
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  )}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
