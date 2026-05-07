/** Removes falsy values from an array. */
export function compactArray<T>(
  arr: (T | null | undefined | false | 0 | '')[]
): T[] {
  return arr.filter(Boolean) as T[];
}

/**
 * Returns a new array with duplicate items removed, based on a key selector.
 * Example: uniqueBy(users, (u) => u.id)
 */
export function uniqueBy<T>(arr: T[], keyFn: (item: T) => unknown): T[] {
  const seen = new Set();
  return arr.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Sorts an array of objects by a date field in descending order (newest first).
 * Items with missing/invalid dates are placed at the end.
 */
export function sortByDateDesc<T>(arr: T[], dateFn: (item: T) => string): T[] {
  return [...arr].sort((a, b) => {
    const da = new Date(dateFn(a)).getTime();
    const db = new Date(dateFn(b)).getTime();
    if (isNaN(da) && isNaN(db)) return 0;
    if (isNaN(da)) return 1;
    if (isNaN(db)) return -1;
    return db - da;
  });
}

/** Splits an array into chunks of a given size. */
export function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}
