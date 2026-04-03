import Image from 'next/image';
import type { BlogPost } from '@/lib/types';
import { Badge } from '@/components/ui/Badge';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface BlogProps {
  posts: BlogPost[];
}

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

interface BlogCardProps {
  post: BlogPost;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="card overflow-hidden flex flex-col group hover:border-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent-glow,rgba(99,102,241,0.08))]"
      aria-label={post.title}
    >
      {/* Cover image */}
      <div className="relative h-44 overflow-hidden bg-[var(--color-elevated)] flex-shrink-0">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={`Cover image for "${post.title}"`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          /* Placeholder when no cover image */
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: 'var(--gradient-surface)' }}
            aria-hidden="true"
          >
            <svg
              width="40"
              height="40"
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

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Date */}
        <time
          className="text-xs text-[var(--color-faint)] mb-2"
          dateTime={post.uploadedTime}
        >
          {post.uploadedTime}
        </time>

        {/* Title */}
        <h3 className="text-sm font-bold text-[var(--color-text)] leading-snug mb-2 group-hover:text-[var(--color-accent-light)] transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-[var(--color-muted)] leading-relaxed mb-3 flex-1 line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3" aria-label="Tags">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="default" className="text-[0.65rem]">
                #{tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Read link */}
        <a
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors mt-auto pt-3 border-t border-[var(--color-border-subtle)]"
          aria-label={`Read "${post.title}" on DEV.to`}
        >
          Read on DEV.to
          <ExternalLinkIcon />
        </a>
      </div>
    </article>
  );
}

/**
 * Blog section — responsive 3-column grid (2-col md, 1-col sm).
 * Shows all posts from blog-posts.json which is populated at build time.
 */
export function Blog({ posts }: BlogProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="blog" className="section-padding" aria-label="Blog posts">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Blog"
          subtitle="Articles and write-ups I've published on DEV.to."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((post) => (
            <BlogCard key={post.link} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
