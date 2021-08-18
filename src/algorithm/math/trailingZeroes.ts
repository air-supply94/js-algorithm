// https://leetcode-cn.com/problems/factorial-trailing-zeroes
// 172
export function trailingZeroes(n: number): number {
  let count = 0;
  let base = 5;
  while (base <= n) {
    count += Math.floor(n / base);
    base *= 5;
  }
  return count;
}
