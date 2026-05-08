import type { RichProject, ProjectCategory } from './types';

/** Filters projects by category. Returns all projects if category is 'all'. */
export function filterProjectsByCategory(
  projects: RichProject[],
  category: ProjectCategory | 'all'
): RichProject[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}

/** Returns only featured projects. */
export function getFeaturedProjects(projects: RichProject[]): RichProject[] {
  return projects.filter((p) => p.featured);
}

/** Returns projects related to the given project (same category, excluding self). */
export function getRelatedProjects(
  projects: RichProject[],
  current: RichProject,
  limit = 3
): RichProject[] {
  return projects
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, limit);
}

/** Returns unique categories present in the project list. */
export function getProjectCategories(
  projects: RichProject[]
): ProjectCategory[] {
  const set = new Set(projects.map((p) => p.category));
  return Array.from(set) as ProjectCategory[];
}
