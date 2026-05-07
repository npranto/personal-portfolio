import Image from 'next/image';
import type { RichBlogPost } from '@/lib/content/types';
import { TagList } from '@/components/ui/TagList';
import { ExternalLink } from '@/components/ui/ExternalLink';

interface BlogCardProps {
  post: RichBlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="card overflow-hidden flex flex-col group hover:border-[var(--color-accent-dark)] transition-all duration-300"
      aria-label={post.title}
    >
      {/* Cover image */}
      {post.coverImage ? (
        <div className="relative h-40 bg-[var(--color-elevated)] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={`${post.title} cover image`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="h-40 bg-[var(--color-elevated)] flex items-center justify-center">
          <span
            className="text-4xl font-extrabold gradient-text opacity-30"
            aria-hidden="true"
          >
            {post.title.charAt(0)}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-2 text-xs text-[var(--color-faint)]">
          <time>{post.uploadedTime}</time>
          {post.readingTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.readingTime} min read</span>
            </>
          )}
        </div>

        <h3 className="text-sm font-bold text-[var(--color-text)] mb-2 leading-snug line-clamp-2 group-hover:text-[var(--color-accent-light)] transition-colors">
          {post.title}
        </h3>

        <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-3 flex-1 mb-3">
          {post.description}
        </p>

        <TagList tags={post.tags} limit={3} className="mb-3" />

        <ExternalLink
          href={post.link}
          aria-label={`Read ${post.title} on dev.to`}
          className="text-xs font-semibold text-[var(--color-accent)] mt-auto"
        >
          Read article
        </ExternalLink>
      </div>
    </article>
  );
}
