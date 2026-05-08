'use client';

import { useState, useEffect } from 'react';
import type { NavLink } from '@/lib/types';
import { useTheme } from '@/components/ThemeProvider';

interface NavbarProps {
  links: NavLink[];
  /** Author initials shown as the logo mark */
  initials: string;
}

/**
 * Sticky navigation bar.
 * - Transparent at the top of the page; gains a blurred dark background on scroll.
 * - Desktop: horizontal list of anchor links.
 * - Mobile: hamburger button that toggles a full-width dropdown menu.
 */
export function Navbar({ links, initials }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const { theme, hydrated, toggleTheme } = useTheme();

  /* Track scroll position to toggle the blurred background */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Allow keyboard users to close the mobile menu quickly */
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  /* Highlight the active section via IntersectionObserver */
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [links]);

  /* Close mobile menu on any nav click */
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-[var(--color-border-subtle)] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo / initials */}
        <a
          href="#"
          className="flex items-center justify-center w-9 h-9 rounded-lg font-bold text-sm text-white select-none"
          style={{ background: 'var(--gradient-accent)' }}
          aria-label="Go to top"
          onClick={handleNavClick}
        >
          {initials}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200
                    ${
                      isActive
                        ? 'text-[var(--color-accent-light)]'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-elevated)]'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.text}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right-side controls: theme toggle + mobile hamburger */}
        <div className="flex items-center gap-1">
          <ThemeToggleButton
            theme={theme}
            hydrated={hydrated}
            onToggle={toggleTheme}
          />

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-lg hover:bg-[var(--color-elevated)] transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-5 h-0.5 bg-[var(--color-text)] rounded-full transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--color-text)] rounded-full transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-5 h-0.5 bg-[var(--color-text)] rounded-full transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-xl"
        >
          <ul
            className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1"
            role="list"
          >
            {links.map((link) => {
              const isActive = activeId === link.href.replace('#', '');
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200
                      ${
                        isActive
                          ? 'bg-[var(--color-accent-glow,rgba(99,102,241,0.15))] text-[var(--color-accent-light)]'
                          : 'text-[var(--color-muted)] hover:bg-[var(--color-elevated)] hover:text-[var(--color-text)]'
                      }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ── Theme toggle button ───────────────────────────────────────────────────── */

function ThemeToggleButton({
  theme,
  hydrated,
  onToggle,
}: {
  theme: 'dark' | 'light';
  hydrated: boolean;
  onToggle: () => void;
}) {
  const isDark = hydrated ? theme === 'dark' : true;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-[var(--color-elevated)] transition-colors text-[var(--color-muted)] hover:text-[var(--color-text)]"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
