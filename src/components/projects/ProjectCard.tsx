import Image from 'next/image';
import Link from 'next/link';
import type { RichProject } from '@/lib/content/types';
import { Badge } from '@/components/ui/Badge';
import { ProjectTechStack } from './ProjectTechStack';
import { ProjectMetrics } from './ProjectMetrics';
import { ExternalLink } from '@/components/ui/ExternalLink';

const CATEGORY_LABELS: Record<string, string> = {
  'web-app': 'Web App',
  library: 'Library',
  tool: 'Tool',
  other: 'Project',
};

interface ProjectCardProps {
  project: RichProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const githubLink = project.links.find((l) => l.type === 'github');
  const demoLink = project.links.find(
    (l) => l.type === 'demo' || l.type === 'npm'
  );

  return (
    <article
      className="card overflow-hidden flex flex-col group hover:border-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent-glow,rgba(99,102,241,0.1))]"
      aria-label={project.name}
    >
      {/* Image / header */}
      <div className="relative h-36 bg-[var(--color-elevated)] overflow-hidden flex items-center justify-center p-4">
        {project.image.md ? (
          <Image
            src={`${project.image.md}.webp`}
            alt={`${project.name} preview`}
            width={200}
            height={200}
            className="w-20 h-20 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            sizes="80px"
          />
        ) : (
          <div className="w-20 h-20 rounded-lg bg-[var(--color-bg)] flex items-center justify-center">
            <span className="text-2xl font-bold gradient-text">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-1.5">
          <Badge variant="outline" className="text-xs">
            {CATEGORY_LABELS[project.category] ?? 'Project'}
          </Badge>
          {project.featured && (
            <Badge variant="accent" className="text-xs">
              Featured
            </Badge>
          )}
        </div>
        <span className="absolute top-3 right-3 text-xs text-[var(--color-faint)] bg-[var(--color-bg)] px-2 py-1 rounded-md border border-[var(--color-border)]">
          {project.duration}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="mb-1">
          <p className="text-xs text-[var(--color-faint)] mb-0.5">
            {project.role}
          </p>
          <h3 className="text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent-light)] transition-colors">
            {project.name}
          </h3>
        </div>

        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.summary}
        </p>

        <ProjectMetrics metrics={project.metrics} className="mb-4" />

        <ProjectTechStack
          technologies={project.technologies}
          limit={5}
          className="mb-4"
        />

        {/* Actions */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-3">
            {githubLink && (
              <ExternalLink
                href={githubLink.url}
                aria-label={`View ${project.name} on GitHub`}
                className="text-xs font-semibold text-[var(--color-muted)]"
              >
                GitHub
              </ExternalLink>
            )}
            {demoLink && (
              <ExternalLink
                href={demoLink.url}
                aria-label={`${demoLink.label} for ${project.name}`}
                className="text-xs font-semibold text-[var(--color-accent)]"
              >
                {demoLink.label}
              </ExternalLink>
            )}
          </div>
          {project.caseStudy && (
            <Link
              href={`/projects/${project.slug}`}
              className="text-xs font-semibold text-[var(--color-accent-light)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-none focus-visible:underline"
              aria-label={`View case study for ${project.name}`}
            >
              Case study →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
