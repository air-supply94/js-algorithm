export function updateBit(x: number, bitPosition: number, bitValue: 0 | 1): number {
  const bitValueNormalized = bitValue ? 1 : 0;

  const clearMask = ~(1 << bitPosition);

  return (x & clearMask) | (bitValueNormalized << bitPosition);
}
