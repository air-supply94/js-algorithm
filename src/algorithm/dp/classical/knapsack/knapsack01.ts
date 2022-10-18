export function knapsack01(weight: number, weightList: number[], value: number[]): number {
  const dp = Array(weightList.length + 1)
    .fill(null)
    .map(() => Array(weight + 1)
      .fill(0));

  for (let i = 1; i <= weightList.length; i++) {
    for (let w = 1; w <= weight; w++) {
      if (w >= weightList[i - 1]) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weightList[i - 1]] + value[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[weightList.length][weight];
}