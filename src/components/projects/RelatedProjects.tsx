import Link from 'next/link';
import type { RichProject } from '@/lib/content/types';

interface RelatedProjectsProps {
  projects: RichProject[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section aria-label="Related projects">
      <h2 className="text-lg font-bold text-[var(--color-text)] mb-4">
        Related Projects
      </h2>
      <ul className="flex flex-col gap-3" role="list">
        {projects.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/projects/${p.slug}`}
              className="card p-4 flex items-center gap-4 group hover:border-[var(--color-accent-dark)] transition-all duration-200 block"
            >
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--color-text)] group-hover:text-[var(--color-accent-light)] transition-colors truncate">
                  {p.name}
                </p>
                <p className="text-xs text-[var(--color-muted)] truncate">
                  {p.summary}
                </p>
              </div>
              <span
                className="text-[var(--color-accent)] text-sm flex-shrink-0"
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
