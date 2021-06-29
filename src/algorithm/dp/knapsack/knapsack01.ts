export function knapsack01(weight: number, count: number, weightList: number[], value: number[]): number {
  const dp = Array(count + 1)
    .fill(null)
    .map(() => Array(weight + 1)
      .fill(0));

  for (let i = 1; i <= count; i++) {
    for (let w = 1; w <= weight; w++) {
      if (i <= weightList.length && w >= weightList[i - 1]) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weightList[i - 1]] + value[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[count][weight];
}
