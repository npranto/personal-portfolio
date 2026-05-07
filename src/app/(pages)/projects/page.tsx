import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { loadProjects } from '@/lib/content/loaders';
import {
  getProjectCategories,
  getFeaturedProjects,
} from '@/lib/content/filters';
import { Container } from '@/components/ui/Container';
import { ProjectsClient } from '@/components/projects/ProjectsClient';

export const metadata: Metadata = buildMetadata({
  title: 'Projects',
  description:
    'A selection of personal and side projects by Shakib Pranto — covering web apps, npm libraries, and developer tools.',
  path: '/projects',
});

export default function ProjectsPage() {
  const projects = loadProjects();
  const availableCategories = getProjectCategories(projects);
  const featuredCount = getFeaturedProjects(projects).length;

  return (
    <main id="main-content" className="flex-1 min-h-screen">
      <div className="section-padding">
        <Container>
          {/* Page header */}
          <header className="mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              Projects
            </h1>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl">
              A selection of personal and side projects — from web apps to npm
              libraries and CLI tools.{' '}
              {featuredCount > 0 && `${featuredCount} featured.`}
            </p>
          </header>

          <ProjectsClient
            projects={projects}
            availableCategories={availableCategories}
          />
        </Container>
      </div>
    </main>
  );
}
