// https://leetcode-cn.com/problems/factorial-trailing-zeroes
// 172
export function trailingZeroes(n: number): number {
  let count = 0;
  let x = n;
  while (x) {
    x = Math.floor(x / 5);
    count += x;
  }
  return count;
}
