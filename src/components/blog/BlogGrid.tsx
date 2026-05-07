import type { RichBlogPost } from '@/lib/content/types';
import { BlogCard } from './BlogCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { ExternalLink } from '@/components/ui/ExternalLink';

interface BlogGridProps {
  posts: RichBlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (!posts || posts.length === 0) {
    return (
      <EmptyState
        title="No posts yet"
        description="Writing and articles will appear here."
        action={
          <ExternalLink
            href="https://dev.to/npranto"
            className="text-sm font-semibold text-[var(--color-accent)]"
          >
            Check dev.to for latest articles
          </ExternalLink>
        }
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.link} post={post} />
      ))}
    </div>
  );
}
