/**
 * Formats an ISO date string or Date into a human-readable form.
 * Example: "2024-03-15" -> "March 2024"
 */
export function formatDate(
  value: string | Date,
  options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' }
): string {
  try {
    const date = typeof value === 'string' ? new Date(value) : value;
    if (isNaN(date.getTime())) return String(value);
    return date.toLocaleDateString('en-US', options);
  } catch {
    return String(value);
  }
}

/**
 * Formats an ISO date string to a short form.
 * Example: "2024-03-15" -> "Mar 2024"
 */
export function formatDateShort(value: string | Date): string {
  return formatDate(value, { year: 'numeric', month: 'short' });
}

/** Returns true if a string looks like a valid date. */
export function isValidDate(value: string): boolean {
  const d = new Date(value);
  return !isNaN(d.getTime());
}
