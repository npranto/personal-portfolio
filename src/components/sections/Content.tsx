'use client';

import { ChangeEvent, useMemo, useState } from 'react';
import Image from 'next/image';
import type { BlogPost, VideoPost } from '@/lib/types';
import { EmptyState } from '@/components/ui/EmptyState';
import { FilterTabs } from '@/components/ui/FilterTabs';
import { Input } from '@/components/ui/Input';
import { SectionHeading } from '@/components/ui/SectionHeading';

type ContentFilter = 'all' | 'article' | 'video';

interface ContentProps {
  blogPosts: BlogPost[];
  videoPosts: VideoPost[];
}

interface ContentItem {
  id: string;
  type: Exclude<ContentFilter, 'all'>;
  title: string;
  description: string;
  date: string;
  image: string;
  link: string;
  source: string;
  tags: string[];
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
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

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function getSearchText(item: ContentItem) {
  return [
    item.title,
    item.description,
    item.date,
    item.source,
    item.type,
    ...item.tags,
  ]
    .join(' ')
    .toLowerCase();
}

const THUMB_SIZE = 72;

function ContentCard({ item }: { item: ContentItem }) {
  const isVideo = item.type === 'video';
  const actionLabel = `${isVideo ? 'Watch' : 'Read'} "${item.title}" on ${item.source}`;

  return (
    <article
      className="card group flex gap-4 p-4 transition-colors duration-200 hover:border-[var(--color-accent-dark)] md:gap-5 md:p-5"
      aria-label={item.title}
    >
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative mt-0.5 h-[72px] w-[72px] shrink-0 overflow-hidden rounded-lg bg-[var(--color-elevated)] ring-1 ring-[var(--color-border-subtle)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
        aria-label={actionLabel}
      >
        {item.image ? (
          <Image
            src={item.image}
            alt=""
            width={THUMB_SIZE}
            height={THUMB_SIZE}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
            sizes="72px"
            loading="lazy"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: 'var(--gradient-surface)' }}
            aria-hidden="true"
          >
            {isVideo ? (
              <PlayGlyph className="h-5 w-5 text-[var(--color-faint)]" />
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-border)"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
              </svg>
            )}
          </div>
        )}

        {isVideo && (
          <span
            className="pointer-events-none absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/72 text-white shadow-sm"
            aria-hidden="true"
          >
            <PlayGlyph className="ml-px h-2.5 w-2.5" />
          </span>
        )}
      </a>

      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <time
            className="text-[10px] font-semibold uppercase leading-tight tracking-widest text-[var(--color-faint)] md:text-[11px]"
            dateTime={item.date}
          >
            {item.date}
          </time>
          <span
            className={
              isVideo
                ? 'inline-flex shrink-0 items-center rounded-full border border-rose-200/90 bg-rose-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-rose-800 dark:border-rose-900/70 dark:bg-rose-950/70 dark:text-rose-200'
                : 'inline-flex shrink-0 items-center rounded-full border border-sky-200/90 bg-sky-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-sky-800 dark:border-sky-800/70 dark:bg-sky-950/70 dark:text-sky-200'
            }
          >
            {isVideo ? 'Video' : 'Article'}
          </span>
        </div>

        <h3 className="text-base font-semibold leading-tight text-[var(--color-text)] md:text-base">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)]"
          >
            {item.title}
          </a>
        </h3>

        <p className="line-clamp-2 text-xs leading-relaxed text-[var(--color-muted)] md:text-[13px]">
          {item.description}
        </p>

        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5" aria-label="Tags">
            {item.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full border border-[#bee3f8] bg-[#ebf8ff] px-2 py-0.5 text-[11px] font-medium text-[#2b6cb0] dark:border-blue-900/60 dark:bg-blue-950/50 dark:text-blue-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 inline-flex w-fit items-center gap-1 text-xs font-semibold text-[#3182ce] hover:text-[var(--color-accent-light)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface)] md:text-[13px] dark:text-[var(--color-accent-light)]"
          aria-label={actionLabel}
        >
          {item.source}
          <ExternalLinkIcon className="shrink-0 opacity-90" />
        </a> */}
      </div>
    </article>
  );
}

export function Content({ blogPosts, videoPosts }: ContentProps) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<ContentFilter>('all');

  const items = useMemo<ContentItem[]>(() => {
    const articles = blogPosts.map((post) => ({
      id: post.link,
      type: 'article' as const,
      title: post.title,
      description: post.description,
      date: post.uploadedTime,
      image: post.coverImage,
      link: post.link,
      source: 'DEV.to',
      tags: post.tags,
    }));

    const videos = videoPosts.map((video) => ({
      id: video.videoId,
      type: 'video' as const,
      title: video.title,
      description: video.description,
      date: video.publishedAt,
      image: video.thumbnail,
      link: video.link,
      source: 'YouTube',
      tags: ['video'],
    }));

    return [...articles, ...videos];
  }, [blogPosts, videoPosts]);

  const filterTabs = useMemo(
    () => [
      { value: 'all' as const, label: 'All', count: items.length },
      {
        value: 'article' as const,
        label: 'Articles',
        count: items.filter((item) => item.type === 'article').length,
      },
      {
        value: 'video' as const,
        label: 'Videos',
        count: items.filter((item) => item.type === 'video').length,
      },
    ],
    [items]
  );

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesType =
        activeFilter === 'all' ? true : item.type === activeFilter;
      const matchesQuery = normalizedQuery
        ? getSearchText(item).includes(normalizedQuery)
        : true;

      return matchesType && matchesQuery;
    });
  }, [activeFilter, items, query]);

  if (items.length === 0) return null;

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <section id="content" className="section-padding" aria-label="Content">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Content"
          subtitle="Articles, walkthroughs, and videos I've published."
        />

        <div className="mb-8 flex flex-col gap-4">
          <Input
            label="Search content"
            hideLabel
            placeholder="Search articles, videos, tags, or topics..."
            value={query}
            onChange={handleSearch}
            leftIcon={<SearchIcon />}
            aria-label="Search articles and videos"
            type="search"
            autoComplete="off"
            spellCheck={false}
          />

          <FilterTabs
            tabs={filterTabs}
            active={activeFilter}
            onChange={setActiveFilter}
            label="Filter content by type"
          />
        </div>

        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-7 xl:grid-cols-3">
            {filteredItems.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No content found"
            description="Try a different search term or filter."
          />
        )}
      </div>
    </section>
  );
}
