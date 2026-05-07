import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { loadSkillGroups } from '@/lib/content/loaders';
import { Container } from '@/components/ui/Container';
import { SkillGroupCard } from '@/components/skills/SkillGroupCard';
import { EmptyState } from '@/components/ui/EmptyState';

export const metadata: Metadata = buildMetadata({
  title: 'Skills',
  description:
    'Technical skills and capabilities of Shakib Pranto — frontend platform, React/Next.js, TypeScript, eCommerce, performance, accessibility, testing, and AI-assisted development.',
  path: '/skills',
});

export default function SkillsPage() {
  const skillGroups = loadSkillGroups();

  return (
    <main id="main-content" className="flex-1 min-h-screen">
      <div className="section-padding">
        <Container>
          {/* Page header */}
          <header className="mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Capabilities
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              Skills
            </h1>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl mb-3">
              A practical breakdown of what I work with day to day — from core
              frontend engineering to performance, accessibility, and
              AI-assisted workflows.
            </p>
            {/* Legend */}
            <div
              className="flex flex-wrap gap-3 text-xs"
              aria-label="Skill level legend"
              role="legend"
            >
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-full bg-[var(--color-accent)]"
                  aria-hidden="true"
                />
                <span className="text-[var(--color-muted)]">
                  Core — use daily
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-full bg-[var(--color-elevated)] border border-[var(--color-border)]"
                  aria-hidden="true"
                />
                <span className="text-[var(--color-muted)]">
                  Proficient — use regularly
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="inline-block w-3 h-3 rounded-full border border-[var(--color-border-subtle)]"
                  aria-hidden="true"
                />
                <span className="text-[var(--color-muted)]">
                  Familiar — worked with
                </span>
              </span>
            </div>
          </header>

          {skillGroups.length === 0 ? (
            <EmptyState
              title="No skills listed"
              description="Skills will appear here once content is added."
            />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {skillGroups.map((group) => (
                <SkillGroupCard key={group.id} group={group} />
              ))}
            </div>
          )}
        </Container>
      </div>
    </main>
  );
}
