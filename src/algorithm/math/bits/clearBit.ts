export function clearBit(x: number, bitPosition: number): number {
  return x & ~(1 << bitPosition);
}
