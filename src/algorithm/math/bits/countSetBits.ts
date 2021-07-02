export function countSetBits(x: number): number {
  let setBitsCount = 0;
  let number = x;

  while (number) {
    number &= (number - 1);
    setBitsCount++;
  }

  return setBitsCount;
}
