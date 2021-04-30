export function formatIndex(index: any, size: number): number {
  const indexInt = index | 0;
  if (indexInt < 0) {
    return indexInt + size;
  } else {
    return indexInt;
  }
}
