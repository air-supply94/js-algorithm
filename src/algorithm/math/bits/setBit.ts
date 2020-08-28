export function setBit(x: number, bitPosition: number): number {
  return x | (1 << bitPosition);
}
