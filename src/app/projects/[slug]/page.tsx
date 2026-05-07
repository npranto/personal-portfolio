import Link from 'next/link';
import { notFound } from 'next/navigation';
import { loadProjectBySlug, loadPortfolioContent } from '@/lib/content/loaders';
import { Container } from '@/components/ui/Container';

export function generateStaticParams() {
  const { projects } = loadPortfolioContent();
  return projects.items.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = loadProjectBySlug(slug);
  if (!project) notFound();

  const related = loadPortfolioContent()
    .projects.items.filter(
      (item) => item.slug !== project.slug && item.category === project.category
    )
    .slice(0, 2);

  return (
    <main id="main-content" className="py-24">
      <Container>
        <Link href="/#projects" className="text-sm text-[var(--color-accent)]">
          ← Back to projects
        </Link>
        <h1 className="mt-3 text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-[var(--color-muted)]">{project.summary}</p>

        <section className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p>
            <strong>Role:</strong> {project.role}
          </p>
          <p>
            <strong>Impact:</strong> {project.impact}
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p>{project.problem}</p>
          <h2 className="text-xl font-semibold">Constraints</h2>
          <ul className="list-disc pl-5">
            {(project.constraints ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold">Solution</h2>
          <p>{project.solution}</p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-xl font-semibold">Architecture Notes</h2>
          <ul className="list-disc pl-5">
            {(project.architectureNotes ?? []).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Technologies</h2>
          <p className="text-[var(--color-muted)]">
            {project.techStack.join(', ')}
          </p>
        </section>

        {related.length > 0 ? (
          <section className="mt-10">
            <h2 className="text-xl font-semibold">Related Projects</h2>
            <ul className="mt-3 space-y-1">
              {related.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/projects/${item.slug}`}
                    className="text-[var(--color-accent)]"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </main>
  );
}
