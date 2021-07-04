// https://leetcode-cn.com/problems/factorial-trailing-zeroes
// 172
export function trailingZeroes(n: number): number {
  let result = 0;
  let m = 5;
  while (m <= n) {
    result += Math.floor(n / m);
    m *= 5;
  }
  return result;
}
