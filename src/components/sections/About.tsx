'use client';

import { useState } from 'react';
import type { About } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface AboutProps {
  about: About;
}

const MAX_INITIAL_PARAGRAPHS = 1;

/**
 * About section with an expandable read-more toggle.
 * Renders `mainContent` by default; reveals `secondaryContent` on expand.
 */
export function About({ about }: AboutProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="section-padding section-alt"
      aria-label="About me"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={about.header}
          subtitle="A little about who I am and what drives me."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── Main intro content (always visible) ─────────────────── */}
          <div className="lg:col-span-3 space-y-5">
            {about.mainContent.map((section) =>
              section.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-[var(--color-muted)] leading-relaxed text-base"
                  dangerouslySetInnerHTML={{ __html: para.body }}
                />
              ))
            )}

            {/* Read more / collapse toggle */}
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors mt-2"
              aria-expanded={expanded}
            >
              {expanded ? 'Show less' : 'Read more'}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {/* Expanded content */}
            {expanded && (
              <div className="space-y-6 pt-2">
                {about.content.slice(MAX_INITIAL_PARAGRAPHS).map((item, idx) =>
                  item.type === 'header' ? (
                    <h3
                      key={idx}
                      className="text-lg font-semibold text-[var(--color-text)] mt-4"
                    >
                      {item.body}
                    </h3>
                  ) : (
                    <p
                      key={idx}
                      className="text-[var(--color-muted)] leading-relaxed text-base"
                      dangerouslySetInnerHTML={{ __html: item.body }}
                    />
                  )
                )}
              </div>
            )}
          </div>

          {/* ── Secondary content panels (always visible on desktop) ── */}
          <div className="lg:col-span-2 space-y-5">
            {about.secondaryContent.map((section) => (
              <div key={section.id} className="card p-6">
                {section.header && (
                  <h3 className="text-base font-semibold text-[var(--color-accent-light)] mb-3 flex items-center gap-2">
                    <span
                      className="inline-block w-1.5 h-4 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    {section.header}
                  </h3>
                )}
                <div className="space-y-3">
                  {section.paragraphs.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-[var(--color-muted)] leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: para.body }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
