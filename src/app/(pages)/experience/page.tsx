import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { loadWorkItems } from '@/lib/content/loaders';
import { Container } from '@/components/ui/Container';
import { ExperienceTimeline } from '@/components/experience/ExperienceTimeline';

export const metadata: Metadata = buildMetadata({
  title: 'Experience',
  description:
    'Work history and engineering impact of Shakib Pranto — senior frontend engineer with experience at Hydrow, Best Buy, and Newfold Digital.',
  path: '/experience',
});

export default function ExperiencePage() {
  const items = loadWorkItems();

  return (
    <main id="main-content" className="flex-1 min-h-screen">
      <div className="section-padding">
        <Container>
          {/* Page header */}
          <header className="mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Career
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              Experience
            </h1>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl">
              Companies I&apos;ve worked with and the impact I&apos;ve had
              building high-performance frontend systems.
            </p>
          </header>

          <ExperienceTimeline items={items} />
        </Container>
      </div>
    </main>
  );
}
