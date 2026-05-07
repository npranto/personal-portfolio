import type { Metadata } from 'next';
import Link from 'next/link';
import {
  loadProjects,
  loadBlogPosts,
  loadVideoPosts,
  loadSkillGroups,
  loadWorkItems,
} from '@/lib/content/loaders';
import { Container } from '@/components/ui/Container';
import { StatCard } from '@/components/ui/StatCard';
import { EmptyState } from '@/components/ui/EmptyState';

export const metadata: Metadata = {
  title: 'QA Dashboard — Dev Only',
  robots: { index: false, follow: false },
};

const isDev = process.env.NODE_ENV === 'development';

const routes = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'Sitemap', href: '/sitemap.xml' },
  { label: 'Robots', href: '/robots.txt' },
];

export default function QaPage() {
  if (!isDev) {
    return (
      <main className="flex-1 flex items-center justify-center p-8">
        <EmptyState
          title="Not available in production"
          description="This page is only accessible in development mode."
        />
      </main>
    );
  }

  const projects = loadProjects();
  const blogPosts = loadBlogPosts();
  const videoPosts = loadVideoPosts();
  const skillGroups = loadSkillGroups();
  const workItems = loadWorkItems();
  const featuredProjects = projects.filter((p) => p.featured);
  const projectsWithCaseStudy = projects.filter((p) => p.caseStudy);

  return (
    <main id="main-content" className="flex-1 min-h-screen">
      <div className="section-padding">
        <Container>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                DEV ONLY
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-[var(--color-text)]">
              QA Dashboard
            </h1>
            <p className="text-[var(--color-muted)] mt-1">
              Internal content validation and route preview.
            </p>
          </header>

          {/* Content stats */}
          <section aria-label="Content stats" className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] mb-4">
              Content
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <StatCard
                label="Projects"
                value={String(projects.length)}
                description={`${featuredProjects.length} featured`}
              />
              <StatCard
                label="With case study"
                value={String(projectsWithCaseStudy.length)}
              />
              <StatCard label="Blog posts" value={String(blogPosts.length)} />
              <StatCard label="Videos" value={String(videoPosts.length)} />
              <StatCard
                label="Skill groups"
                value={String(skillGroups.length)}
              />
              <StatCard label="Work items" value={String(workItems.length)} />
            </div>
          </section>

          {/* Routes */}
          <section aria-label="Route checklist" className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] mb-4">
              Routes
            </h2>
            <ul className="flex flex-col gap-2" role="list">
              {routes.map((route) => (
                <li
                  key={route.href}
                  className="card p-3 flex items-center justify-between"
                >
                  <span className="text-sm font-mono text-[var(--color-muted)]">
                    {route.href}
                  </span>
                  <Link
                    href={route.href}
                    className="text-xs text-[var(--color-accent)] hover:underline focus-visible:outline-none focus-visible:underline"
                    target={
                      route.href.startsWith('/') && !route.href.includes('.')
                        ? undefined
                        : '_blank'
                    }
                  >
                    {route.label} →
                  </Link>
                </li>
              ))}
              {projects.map((p) => (
                <li
                  key={p.slug}
                  className="card p-3 flex items-center justify-between"
                >
                  <span className="text-sm font-mono text-[var(--color-muted)]">
                    /projects/{p.slug}
                  </span>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="text-xs text-[var(--color-accent)] hover:underline focus-visible:outline-none focus-visible:underline"
                  >
                    {p.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Component states */}
          <section aria-label="Component states">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--color-accent)] mb-4">
              Component States
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-4">
                <h3 className="text-xs font-bold text-[var(--color-text)] mb-2">
                  EmptyState
                </h3>
                <EmptyState
                  title="Nothing here"
                  description="This is an empty state example."
                />
              </div>
            </div>
          </section>
        </Container>
      </div>
    </main>
  );
}
