export function formatIndex(index: any, size: number): number {
  const indexInt = index | 0;
  return indexInt < 0 ? indexInt + size : indexInt;
}
