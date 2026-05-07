/**
 * Merges class names, filtering out falsy values.
 * Lightweight alternative to clsx/classnames for this project.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
