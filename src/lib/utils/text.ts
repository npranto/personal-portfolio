/** Truncates text to a maximum length, appending an ellipsis if needed. */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}

/**
 * Estimates reading time in minutes for a block of text.
 * Assumes an average reading speed of 200 words per minute.
 */
export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Strips HTML tags from a string. */
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/** Capitalizes the first letter of a string. */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
