// https://leetcode.cn/problems/perfect-squares/description/?envType=study-plan-v2&envId=top-100-liked
// 279
// top100
export function numSquares(n: number): number {
  const dp: number[] = Array(n + 1)
    .fill(0);

  for (let i = 1; i <= n; i++) {
    let minValue = Infinity;
    for (let j = 1; j * j <= i; j++) {
      minValue = Math.min(minValue, dp[i - j * j]);
    }
    dp[i] = minValue + 1;
  }
  return dp[n];
}
