import Image from 'next/image';
import type { VideoPost } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface VideosProps {
  posts: VideoPost[];
}

function PlayIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-white drop-shadow-lg"
    >
      <circle
        cx="12"
        cy="12"
        r="12"
        className="text-black/50"
        fill="currentColor"
      />
      <path d="M10 8.5l6 3.5-6 3.5V8.5z" fill="white" />
    </svg>
  );
}

interface VideoCardProps {
  video: VideoPost;
}

function VideoCard({ video }: VideoCardProps) {
  return (
    <article
      className="card overflow-hidden flex flex-col group hover:border-[var(--color-accent-dark)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent-glow,rgba(99,102,241,0.08))]"
      aria-label={video.title}
    >
      {/* Thumbnail with play overlay */}
      <a
        href={video.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-44 overflow-hidden bg-[var(--color-elevated)] flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
        aria-label={`Watch "${video.title}" on YouTube`}
        tabIndex={0}
      >
        {video.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt={`Thumbnail for "${video.title}"`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 50vw"
            loading="lazy"
          />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: 'var(--gradient-surface)' }}
            aria-hidden="true"
          />
        )}
        {/* Dark overlay + play button */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayIcon />
        </div>
        {/* YouTube brand pill */}
        <span className="absolute top-2 left-2 bg-[#FF0000] text-white text-[0.6rem] font-bold px-1.5 py-0.5 rounded-sm">
          YouTube
        </span>
      </a>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <time
          className="text-xs text-[var(--color-faint)] mb-2"
          dateTime={video.publishedAt}
        >
          {video.publishedAt}
        </time>

        <h3 className="text-sm font-bold text-[var(--color-text)] leading-snug mb-2 group-hover:text-[var(--color-accent-light)] transition-colors line-clamp-2">
          <a
            href={video.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {video.title}
          </a>
        </h3>

        <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-3">
          {video.description}
        </p>
      </div>
    </article>
  );
}

/**
 * Videos section — 2-column card grid with YouTube thumbnails.
 * Populated at build time from video-posts.json.
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {posts.map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
