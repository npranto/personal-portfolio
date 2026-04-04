import Image from 'next/image';
import type { BlogPost } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface BlogProps {
  posts: BlogPost[];
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
      className={className}
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

interface BlogRowProps {
  post: BlogPost;
}

function BlogRow({ post }: BlogRowProps) {
  return (
    <article
      className="flex gap-3 sm:gap-3.5 py-3.5 border-b border-[var(--color-border-subtle)] min-w-0 first:pt-0 last:border-b-0"
      aria-label={post.title}
    >
      {/* Compact thumb — fixed small size, no hover zoom */}
      <div className="relative w-[4.5rem] h-[4.5rem] sm:w-16 sm:h-16 shrink-0 rounded-md overflow-hidden bg-[var(--color-elevated)] ring-1 ring-[var(--color-border-subtle)]">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover"
            sizes="64px"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'var(--gradient-surface)' }}
            aria-hidden="true"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-border)"
              strokeWidth="1.5"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1 flex flex-col gap-1">
        <time
          className="text-[0.65rem] uppercase tracking-wide text-[var(--color-faint)]"
          dateTime={post.uploadedTime}
        >
          {post.uploadedTime}
        </time>

        <h3 className="text-sm font-semibold text-[var(--color-text)] leading-snug">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] rounded-sm"
          >
            {post.title}
          </a>
        </h3>

        <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-2">
          {post.description}
        </p>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-0.5" aria-label="Tags">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="default"
                className="text-[0.6rem] py-0 px-1.5"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[0.65rem] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] mt-1 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-sm"
          aria-label={`Read "${post.title}" on DEV.to`}
        >
          DEV.to
          <ExternalLinkIcon />
        </a>
      </div>
    </article>
  );
}

/**
 * Blog — tight multi-column index: compact rows with small thumbs, dividers only.
 */
export function Blog({ posts }: BlogProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="blog" className="section-padding" aria-label="Blog posts">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blog"
          subtitle="Articles and write-ups I've published"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-0">
          {posts.map((post) => (
            <BlogRow key={post.link} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
