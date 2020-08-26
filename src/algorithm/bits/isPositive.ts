export function isPositive(x: number): boolean {
  if (x === 0) {
    return false;
  }

  return ((x >> 31) & 1) === 0;
}
