export function countSetBits(x: number): number {
  let setBitsCount = 0;
  let number = x;

  while (number) {
    setBitsCount += number & 1;
    number >>= 1;
  }

  return setBitsCount;
}
