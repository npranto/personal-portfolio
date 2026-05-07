'use client';

import { useState, useMemo } from 'react';
import type { RichProject, ProjectCategory } from '@/lib/content/types';
import { searchProjects } from '@/lib/content/search';
import { filterProjectsByCategory } from '@/lib/content/filters';
import { sortProjects } from '@/lib/content/sort';
import { ProjectSearch } from './ProjectSearch';
import { ProjectGrid } from './ProjectGrid';
import { FilterTabs } from '@/components/ui/FilterTabs';

type CategoryFilter = ProjectCategory | 'all';

interface ProjectsClientProps {
  projects: RichProject[];
  availableCategories: ProjectCategory[];
}

const CATEGORY_LABELS: Record<CategoryFilter, string> = {
  all: 'All',
  'web-app': 'Web Apps',
  library: 'Libraries',
  tool: 'Tools',
  other: 'Other',
};

export function ProjectsClient({
  projects,
  availableCategories,
}: ProjectsClientProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const tabs = useMemo(() => {
    const allTab = {
      value: 'all' as CategoryFilter,
      label: 'All',
      count: projects.length,
    };
    const catTabs = availableCategories.map((cat) => ({
      value: cat as CategoryFilter,
      label: CATEGORY_LABELS[cat],
      count: projects.filter((p) => p.category === cat).length,
    }));
    return [allTab, ...catTabs];
  }, [projects, availableCategories]);

  const filtered = useMemo(() => {
    let result = sortProjects(projects);
    if (featuredOnly) result = result.filter((p) => p.featured);
    result = filterProjectsByCategory(result, category);
    result = searchProjects(result, query);
    return result;
  }, [projects, query, category, featuredOnly]);

  return (
    <div>
      {/* Controls — min-height reduces layout shift when category tabs wrap */}
      <div className="flex flex-col gap-4 mb-8 min-h-[11.5rem] sm:min-h-[8rem]">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <ProjectSearch value={query} onChange={setQuery} />
          </div>
          <label className="flex items-center gap-2 text-sm text-[var(--color-muted)] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(e) => setFeaturedOnly(e.target.checked)}
              className="rounded accent-[var(--color-accent)] w-4 h-4"
              aria-label="Show featured projects only"
            />
            Featured only
          </label>
        </div>
        <FilterTabs
          tabs={tabs}
          active={category}
          onChange={setCategory}
          label="Filter by category"
        />
      </div>

      {/* Count */}
      <p
        className="text-sm text-[var(--color-muted)] mb-6"
        aria-live="polite"
        aria-atomic="true"
      >
        {filtered.length === 0
          ? 'No projects found'
          : `${filtered.length} project${filtered.length !== 1 ? 's' : ''}`}
      </p>

      <ProjectGrid
        projects={filtered}
        emptyTitle="No projects found"
        emptyDescription={
          query || category !== 'all' || featuredOnly
            ? 'Try adjusting your search or filters.'
            : 'No projects available yet.'
        }
      />
    </div>
  );
}
