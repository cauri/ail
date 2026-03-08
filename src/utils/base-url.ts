/**
 * Prepend the configured base path to an absolute path.
 * In local dev (base = '/'), returns the path unchanged.
 * In production (base = '/ail/'), prepends '/ail'.
 */
export function baseUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
