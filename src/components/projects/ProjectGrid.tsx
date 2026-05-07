import type { RichProject } from '@/lib/content/types';
import { ProjectCard } from './ProjectCard';
import { EmptyState } from '@/components/ui/EmptyState';

interface ProjectGridProps {
  projects: RichProject[];
  emptyTitle?: string;
  emptyDescription?: string;
}

export function ProjectGrid({
  projects,
  emptyTitle = 'No projects found',
  emptyDescription = 'Try adjusting your search or filter.',
}: ProjectGridProps) {
  if (!projects || projects.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
