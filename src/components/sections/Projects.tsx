import Image from 'next/image';
import type { ProjectItem } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface ProjectsProps {
  header: string;
  items: ProjectItem[];
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      width="14"
      height="14"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.154-1.11-1.461-1.11-1.461-.908-.620.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

interface ProjectCardProps {
  project: ProjectItem;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="card overflow-hidden flex flex-col group hover:border-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent-glow,rgba(99,102,241,0.1))]"
      aria-label={project.name}
    >
      {/* Project image */}
      <div className="relative h-36 bg-[var(--color-elevated)] overflow-hidden flex items-center justify-center p-4">
        <Image
          src={`${project.image.md}.webp`}
          alt={`${project.name} preview`}
          width={200}
          height={200}
          className="w-20 h-20 object-contain rounded-lg transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          sizes="80px"
        />
        {/* Duration badge */}
        <span className="absolute top-3 right-3 text-xs text-[var(--color-faint)] bg-[var(--color-bg)] px-2 py-1 rounded-md border border-[var(--color-border)]">
          {project.duration}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent-light)] transition-colors">
          {project.name}
        </h3>

        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-4 flex-1 line-clamp-4">
          {project.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-4" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action links */}
        <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-border-subtle)]">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-muted)] hover:text-[var(--color-accent-light)] transition-colors"
              aria-label={`View ${project.name} on GitHub`}
            >
              <GithubIcon />
              GitHub
            </a>
          )}
          {project.demoUrl && project.demoUrl !== project.githubUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
              aria-label={`Live demo for ${project.name}`}
            >
              <ExternalLinkIcon />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/**
 * Projects section — 2-column card grid on desktop, 1-column on mobile.
 */
export function Projects({ header, items }: ProjectsProps) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
