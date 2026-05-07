'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { ProjectItem } from '@/lib/content/types';
import { Badge } from '@/components/ui/Badge';
import { EmptyState } from '@/components/ui/EmptyState';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { Input } from '@/components/ui/Input';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface ProjectsProps {
  header: string;
  items: ProjectItem[];
}

type ProjectFilter =
  | 'all'
  | 'featured'
  | 'frontend'
  | 'full-stack'
  | 'ai-automation'
  | 'ecommerce';

const FILTERS: Array<{ value: ProjectFilter; label: string }> = [
  { value: 'all', label: 'All' },
  { value: 'featured', label: 'Featured' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'full-stack', label: 'Full-stack' },
  { value: 'ai-automation', label: 'AI/Automation' },
  { value: 'ecommerce', label: 'eCommerce' },
];

export function Projects({ header, items }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return items.filter((project) => {
      const byFilter =
        activeFilter === 'all'
          ? true
          : activeFilter === 'featured'
            ? project.featured
            : project.category === activeFilter;
      const q = query.trim().toLowerCase();
      const byQuery =
        q.length === 0 ||
        project.title.toLowerCase().includes(q) ||
        project.summary.toLowerCase().includes(q) ||
        project.techStack.join(' ').toLowerCase().includes(q);
      return byFilter && byQuery;
    });
  }, [activeFilter, items, query]);

  return (
    <Section id="projects" label="Projects" alternate>
      <SectionHeading
        title={header}
        subtitle="Case-study style project stories focused on product impact, engineering constraints, and architecture decisions."
      />

      <div className="space-y-4">
        <FilterTabs
          options={FILTERS}
          selected={activeFilter}
          onSelect={setActiveFilter}
        />
        <Input
          id="project-search"
          label="Search projects"
          placeholder="Search by title, stack, or summary"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="mt-6">
          <EmptyState
            title="No matching projects"
            description="Try another filter or search term to explore additional case studies."
          />
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <article key={project.id} className="card p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold">{project.title}</h3>
                {project.featured ? (
                  <Badge variant="accent">Featured</Badge>
                ) : null}
              </div>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                {project.summary}
              </p>
              <p className="mt-3 text-sm">
                <span className="font-semibold">Role:</span> {project.role}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.techStack.slice(0, 5).map((tech) => (
                  <Badge key={`${project.id}-${tech}`}>{tech}</Badge>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-light)]"
                >
                  View case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
