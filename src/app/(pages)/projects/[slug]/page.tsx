import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { loadProjects } from '@/lib/content/loaders';
import { getRelatedProjects } from '@/lib/content/filters';
import { buildMetadata } from '@/lib/seo/metadata';
import { breadcrumbJsonLd } from '@/lib/seo/structured-data';
import { canonicalUrl } from '@/lib/seo/routes';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { ProjectCaseStudy } from '@/components/projects/ProjectCaseStudy';
import { ProjectMetrics } from '@/components/projects/ProjectMetrics';
import { ProjectTechStack } from '@/components/projects/ProjectTechStack';
import { RelatedProjects } from '@/components/projects/RelatedProjects';
import { ExternalLink } from '@/components/ui/ExternalLink';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = loadProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = loadProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return buildMetadata({
    title: project.name,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

const CATEGORY_LABELS: Record<string, string> = {
  'web-app': 'Web App',
  library: 'Library',
  tool: 'Tool',
  other: 'Project',
};

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projects = loadProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const related = getRelatedProjects(projects, project, 3);
  const siteUrl = canonicalUrl(`/projects/${project.slug}`);

  const breadcrumb = breadcrumbJsonLd([
    { name: 'Home', url: canonicalUrl('/') },
    { name: 'Projects', url: canonicalUrl('/projects') },
    { name: project.name, url: siteUrl },
  ]);

  return (
    <main id="main-content" className="flex-1 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="section-padding">
        <Container>
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-8 focus-visible:outline-none focus-visible:underline"
            aria-label="Back to all projects"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All Projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
            {/* Main content */}
            <article>
              {/* Header */}
              <header className="mb-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">
                    {CATEGORY_LABELS[project.category] ?? 'Project'}
                  </Badge>
                  {project.featured && <Badge variant="accent">Featured</Badge>}
                </div>

                <div className="flex items-start gap-5 mb-4">
                  {project.image.md && (
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-[var(--color-elevated)] border border-[var(--color-border)] flex items-center justify-center p-2">
                      <Image
                        src={`${project.image.md}.webp`}
                        alt={`${project.name} logo`}
                        width={48}
                        height={48}
                        className="object-contain w-full h-full"
                        priority
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-[var(--color-faint)] mb-1">
                      {project.role} &middot; {project.duration}
                    </p>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text)]">
                      {project.name}
                    </h1>
                  </div>
                </div>

                <p className="text-lg text-[var(--color-muted)] leading-relaxed">
                  {project.summary}
                </p>
              </header>

              {/* Metrics */}
              {project.metrics.length > 0 && (
                <section aria-label="Project metrics" className="mb-8">
                  <ProjectMetrics metrics={project.metrics} />
                </section>
              )}

              {/* Description */}
              <section aria-label="Project description" className="mb-8">
                <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">
                  Overview
                </h2>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {project.description}
                </p>
              </section>

              {/* Case Study */}
              {project.caseStudy && (
                <section aria-label="Case study" className="mb-8">
                  <h2 className="text-xl font-bold text-[var(--color-text)] mb-5">
                    Case Study
                  </h2>
                  <div className="card p-6">
                    <ProjectCaseStudy caseStudy={project.caseStudy} />
                  </div>
                </section>
              )}

              {/* Tech Stack */}
              <section aria-label="Tech stack" className="mb-8">
                <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">
                  Tech Stack
                </h2>
                <ProjectTechStack technologies={project.technologies} />
              </section>

              {/* Links */}
              {project.links.length > 0 && (
                <section aria-label="Project links" className="mb-8">
                  <h2 className="text-xl font-bold text-[var(--color-text)] mb-3">
                    Links
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <ExternalLink
                        key={link.url}
                        href={link.url}
                        aria-label={`${link.label} for ${project.name}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-[var(--color-elevated)] border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-accent-dark)] transition-colors"
                      >
                        {link.label}
                      </ExternalLink>
                    ))}
                  </div>
                </section>
              )}
            </article>

            {/* Sidebar */}
            <aside aria-label="Related projects">
              <div className="sticky top-24">
                <RelatedProjects projects={related} />
              </div>
            </aside>
          </div>
        </Container>
      </div>
    </main>
  );
}
