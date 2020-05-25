export function BKDRHash(key: string): number {
  const seed = 131;
  let hash = 0;
  for (const item of key) {
    hash = (hash * seed) + item.charCodeAt(0);
  }
  return hash;
}
