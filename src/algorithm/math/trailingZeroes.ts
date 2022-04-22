// https://leetcode-cn.com/problems/factorial-trailing-zeroes
// 172
export function trailingZeroes(n: number): number {
  let count = 0;
  while (n > 0) {
    n = (n / 5) | 0;
    count += n;
  }
  return count;
}
