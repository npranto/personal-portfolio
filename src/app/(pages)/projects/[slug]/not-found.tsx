import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      aria-label="Project not found"
    >
      <div
        className="text-6xl font-extrabold gradient-text mb-4 select-none"
        aria-hidden="true"
      >
        404
      </div>
      <h1 className="text-2xl font-bold text-[var(--color-text)] mb-2">
        Project not found
      </h1>
      <p className="text-[var(--color-muted)] mb-8 max-w-sm">
        This project does not exist or may have been removed.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-dark)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      >
        View all projects
      </Link>
    </main>
  );
}
