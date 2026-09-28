export function urlFor(path = ''): string {
  const root = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${root}/${path.replace(/^\//, '')}`;
}

export function publicationDate(date: Date): string {
  // UTC avoids shifting the original date for posts that had timezone offsets.
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }).format(date);
}
