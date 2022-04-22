// https://leetcode-cn.com/problems/number-of-1-bits/
// 191
export function hammingWeight(x: number): number {
  let setBitsCount = 0;
  let number = x;

  while (number !== 0) {
    number &= (number - 1);
    setBitsCount++;
  }

  return setBitsCount;
}
