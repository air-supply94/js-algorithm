export function clearBit(x: number, bitPosition: number): number {
  const mask = ~(1 << bitPosition);

  return x & mask;
}
