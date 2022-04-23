// https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/
// 1663
export function getSmallestString(n: number, k: number): string {
  let result = '';
  let currentMax = 0;
  let restSum = k - n;

  for (let i = n - 1; i > -1; i--) {
    currentMax = Math.min(25, restSum);
    result = `${String.fromCharCode(97 + currentMax)}${result}`;
    restSum -= currentMax;
  }

  return result;
}
