import { SectionHeading } from '@/components/ui/SectionHeading';
import { ProjectsClient } from '@/components/projects/ProjectsClient';
import { loadProjects } from '@/lib/content/loaders';
import { getProjectCategories } from '@/lib/content/filters';

interface ProjectsProps {
  header: string;
}

/**
 * Projects section — search, filters, and 2-column card grid.
 * Data comes from the same loader as project detail pages; interactivity is client-only.
 */
export function Projects({ header }: ProjectsProps) {
  const projects = loadProjects();
  const availableCategories = getProjectCategories(projects);

  return (
    <section
      id="projects"
      className="section-padding section-alt"
      aria-label="Projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={header}
          subtitle="Selected personal and side projects I've built over the years."
        />

        <ProjectsClient
          projects={projects}
          availableCategories={availableCategories}
        />
      </div>
    </section>
  );
}
