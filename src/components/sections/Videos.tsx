import Image from 'next/image';
import type { VideoPost } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface VideosProps {
  posts: VideoPost[];
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

interface VideoRowProps {
  video: VideoPost;
}

function VideoRow({ video }: VideoRowProps) {
  return (
    <article
      className="flex gap-3 sm:gap-3.5 py-3.5 border-b border-[var(--color-border-subtle)] min-w-0 first:pt-0 last:border-b-0"
      aria-label={video.title}
    >
      <a
        href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[5.25rem] aspect-video shrink-0 rounded-md overflow-hidden bg-[var(--color-elevated)] ring-1 ring-[var(--color-border-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
        aria-label={`Watch "${video.title}" on YouTube`}
      >
        {video.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 84px, 96px"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: 'var(--gradient-surface)' }}
            aria-hidden="true"
          />
        )}
        {/* Static play affordance — no hover zoom or full-bleed overlay */}
        <span className="absolute bottom-1 right-1 flex items-center justify-center w-6 h-6 rounded-full bg-black/70 text-white shadow-sm">
          <PlayGlyph className="ml-0.5" />
        </span>
        <span className="absolute top-1 left-1 bg-[#FF0000]/95 text-white text-[0.55rem] font-bold px-1 py-px rounded leading-none">
          YT
        </span>
      </a>

      <div className="min-w-0 flex-1 flex flex-col gap-1">
        <time
          className="text-[0.65rem] uppercase tracking-wide text-[var(--color-faint)]"
          dateTime={video.publishedAt}
        >
          {video.publishedAt}
        </time>

        <h3 className="text-sm font-semibold text-[var(--color-text)] leading-snug">
          <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] rounded-sm"
          >
            {video.title}
          </a>
        </h3>

        <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>
    </article>
  );
}

/**
 * Videos — same tight multi-column pattern as Blog; small thumbs, no hover scale.
 */
export function Videos({ posts }: VideosProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      id="videos"
      className="section-padding section-alt"
      aria-label="YouTube videos"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Videos"
          subtitle="CSSBattle solutions and developer content on YouTube."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 lg:gap-x-10 gap-y-0">
          {posts.map((video) => (
            <VideoRow key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
