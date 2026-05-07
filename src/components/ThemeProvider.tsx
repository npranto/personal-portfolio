'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useSyncExternalStore,
} from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextValue {
  theme: Theme;
  hydrated: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  hydrated: false,
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  /**
   * Read the preferred theme on the client. We still gate theme-dependent UI
   * behind `hydrated` so server/client markup stays consistent at hydration.
   */
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme') as Theme | null;
    return stored ?? getSystemTheme();
  });
  const hydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  /* Keep the data-theme attribute in sync whenever theme state changes */
  useEffect(() => {
    if (!hydrated) return;
    applyTheme(theme);
  }, [theme, hydrated]);

  /**
   * When the user has not set an explicit preference, track OS-level changes
   * so the site stays in sync with system dark/light mode toggling.
   */
  useEffect(() => {
    if (!hydrated) return;
    const stored = localStorage.getItem('theme');
    if (stored) return;

    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      const next: Theme = e.matches ? 'light' : 'dark';
      setTheme(next);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, [hydrated]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, hydrated, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
