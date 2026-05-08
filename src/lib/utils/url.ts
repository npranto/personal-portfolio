/** Returns true if a string is a well-formed absolute URL. */
export function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Returns the site base URL from the environment.
 * Prefer NEXT_PUBLIC_SITE_URL, then fall back to a safe localhost default.
 */
export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ??
    'http://localhost:3000'
  );
}

/** Builds an absolute URL from a path, using the configured site URL. */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  return `${base}/${path.replace(/^\//, '')}`;
}
