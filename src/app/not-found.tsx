import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      aria-label="Page not found"
    >
      <div
        className="text-8xl font-extrabold gradient-text mb-4 select-none"
        aria-hidden="true"
      >
        404
      </div>
      <h1 className="text-2xl font-bold text-[var(--color-text)] mb-2">
        Page not found
      </h1>
      <p className="text-[var(--color-muted)] mb-8 max-w-sm">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-semibold hover:bg-[var(--color-accent-dark)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      >
        Go home
      </Link>
    </main>
  );
}
