// https://leetcode.cn/problems/perfect-squares/description/?envType=study-plan-v2&envId=top-100-liked
// 279
// top100
export function numSquares(n: number): number {
  const dp: number[] = Array(n + 1)
    .fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}
