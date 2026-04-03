import type { Socials } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { SocialIcons } from '@/components/ui/SocialIcons';

interface ContactProps {
  email: string;
  socials: Socials;
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/**
 * Contact section — centered layout with email CTA and social links grid.
 */
export function Contact({ email, socials }: ContactProps) {
  return (
    <section id="contact" className="section-padding" aria-label="Contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          title="Contact"
          subtitle="Got a project, opportunity, or just want to chat? Reach out — I'd love to connect."
          align="center"
        />

        {/* Email CTA */}
        <div className="mb-10">
          <Button
            as="a"
            href={`mailto:${email}`}
            variant="primary"
            size="lg"
            leftIcon={<MailIcon />}
          >
            {email}
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <span
            className="flex-1 h-px bg-[var(--color-border)]"
            aria-hidden="true"
          />
          <span className="text-xs text-[var(--color-faint)] font-medium tracking-widest uppercase">
            Or find me on
          </span>
          <span
            className="flex-1 h-px bg-[var(--color-border)]"
            aria-hidden="true"
          />
        </div>

        {/* Social icons — centered */}
        <div className="flex justify-center">
          <SocialIcons socials={socials} size="lg" />
        </div>
      </div>
    </section>
  );
}
