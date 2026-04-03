'use client';

import { useState, useEffect } from 'react';
import type { NavLink } from '@/lib/types';

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

  /* Track scroll position to toggle the blurred background */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 rounded-lg hover:bg-[var(--color-elevated)] transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
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
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-surface)]/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-xl">
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
