import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo/metadata';
import { loadBlogPosts } from '@/lib/content/loaders';
import { Container } from '@/components/ui/Container';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { ExternalLink } from '@/components/ui/ExternalLink';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description:
    'Articles and technical writing by Shakib Pranto — covering frontend engineering, CSS, JavaScript, developer tools, and productivity.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = loadBlogPosts();

  return (
    <main id="main-content" className="flex-1 min-h-screen">
      <div className="section-padding">
        <Container>
          {/* Page header */}
          <header className="mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-3">
              Writing
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text)] mb-4">
              Blog
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-lg text-[var(--color-muted)]">
                {posts.length > 0
                  ? `${posts.length} articles published on dev.to`
                  : 'Articles coming soon.'}
              </p>
              <ExternalLink
                href="https://dev.to/npranto"
                className="text-sm font-semibold text-[var(--color-accent)]"
              >
                View on dev.to
              </ExternalLink>
            </div>
          </header>

          <BlogGrid posts={posts} />
        </Container>
      </div>
    </main>
  );
}
