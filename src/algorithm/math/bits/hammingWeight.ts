// https://leetcode-cn.com/problems/number-of-1-bits/
// 191
// 剑指 Offer
// https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8
export function hammingWeight(x: number): number {
  let setBitsCount = 0;
  let number = x;

  while (number !== 0) {
    number &= number - 1;
    setBitsCount++;
  }

  return setBitsCount;
}
