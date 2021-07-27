export function updateBit(x: number, bitPosition: number, bitValue: 0 | 1): number {
  if (bitValue === 1) {
    return x | (1 << bitPosition);
  } else {
    return x & ~(1 << bitPosition);
  }
}
