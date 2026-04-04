import type { About } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';

interface AboutProps {
  about: About;
}

export function About({ about }: AboutProps) {
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
          {/* ── Main intro content ───────────────────────────────────── */}
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
          </div>

          {/* ── Secondary content panels ─────────────────────────────── */}
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
