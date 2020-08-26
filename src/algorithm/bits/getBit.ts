export function getBit(x: number, bitPosition: number): number {
  return (x >> bitPosition) & 1;
}
