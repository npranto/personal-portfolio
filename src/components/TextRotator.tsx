'use client';

import { useState, useEffect } from 'react';

interface TextRotatorProps {
  items: string[];
  className?: string;
  /** Milliseconds each item is shown before transitioning. Defaults to 3000. */
  interval?: number;
}

/**
 * Cycles through a list of strings with a smooth fade + slide-up transition.
 * Uses React state so the animation is always reliable regardless of
 * the number of items.
 */
export function TextRotator({
  items,
  className = '',
  interval = 3000,
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!items || items.length <= 1) return;

    const t = setInterval(() => {
      setVisible(false);
      const swap = setTimeout(() => {
        setIndex((i) => (i + 1) % items.length);
        setVisible(true);
      }, 380);

      return () => clearTimeout(swap);
    }, interval);

    return () => clearInterval(t);
  }, [items, interval]);

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`flex items-center gap-2.5 ${className}`}
      aria-label={`Roles: ${items.join(', ')}`}
    >
      <span
        className="text-accent font-bold text-base leading-none select-none tracking-wider"
        aria-hidden="true"
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      >
        //
      </span>
      <span
        className="text-lg md:text-xl font-semibold text-accent-light inline-block"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {items[index]}
      </span>
    </div>
  );
}
