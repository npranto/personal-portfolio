import Image from 'next/image';
import type { RichProject } from '@/lib/content/types';
import { Badge } from '@/components/ui/Badge';
import { ExternalLink } from '@/components/ui/ExternalLink';

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
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent-light)] transition-colors mb-2">
          {project.name}
        </h3>

        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border-subtle)]">
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
      </div>
    </article>
  );
}
