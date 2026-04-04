import Image from 'next/image';
import type { Profile, Socials } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { SocialIcons } from '@/components/ui/SocialIcons';
import { TextRotator } from '@/components/TextRotator';

interface HeroProps {
  profile: Profile;
  socials: Socials;
}

/**
 * Full-viewport hero section.
 * Desktop: two-column layout — text left, circular profile photo right.
 * Mobile: stacked — photo on top, text below.
 */
export function Hero({ profile, socials }: HeroProps) {
  return (
    <section
      id="jumbotron"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Radial glow background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 70% 50%, var(--color-accent-glow, rgba(99,102,241,0.12)), transparent)',
        }}
      />

      {/* Grid dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-text) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10">
          {/* ── Text column ─────────────────────────────────────────────── */}
          <div className="flex-1 text-center md:text-left">
            {/* Greeting */}
            <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent)] mb-4">
              Hello,
            </p>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="text-[var(--color-text)]">I&apos;m </span>
              <span className="gradient-text">{profile.nickname}</span>
            </h1>

            {/* Role + location sub-heading */}
            <p className="text-lg text-[var(--color-muted)] mb-5 gap-2 flex items-center">
              {profile.currentRole}
              <span
                className="text-accent font-bold text-base leading-none select-none tracking-wider"
                aria-hidden="true"
              >
                /
              </span>
              {profile.location}
            </p>

            {/* Animated role rotator */}
            <div className="mb-8 flex justify-center md:justify-start">
              <TextRotator items={profile.highlightedRoles} />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <Button
                as="a"
                href={profile.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                View Resume
              </Button>
              <Button
                as="a"
                href={profile.contactHref}
                variant="outline"
                size="lg"
              >
                Let&apos;s Talk
              </Button>
            </div>

            {/* Social links */}
            <SocialIcons
              socials={socials}
              className="justify-center md:justify-start"
            />
          </div>

          {/* ── Profile photo column ────────────────────────────────────── */}
          <div className="flex-shrink-0 flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-1 rounded-full glow-ring"
                aria-hidden="true"
              />
              {/* Rotating gradient border */}
              <div
                className="absolute -inset-0.5 rounded-full opacity-70"
                aria-hidden="true"
                style={{ background: 'var(--gradient-accent)' }}
              />
              {/* Photo container */}
              <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[var(--color-bg)]">
                <Image
                  src={`${profile.picture.md}.jpg`}
                  alt={`${profile.author} — profile photo`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                  priority
                  quality={90}
                  sizes="(max-width: 767px) 208px, 288px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — hidden on mobile */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce"
          aria-hidden="true"
        >
          <span className="text-xs text-[var(--color-faint)]">scroll</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[var(--color-faint)]"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
