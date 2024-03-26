// 01背包(数量有限)
export function knapsack(weight: number, weightList: number[], value: number[]): number {
  const dp: number[] = Array(weight + 1)
    .fill(0);

  for (let i = 1; i <= weightList.length; i++) {
    const previousDp = dp.slice();
    for (let w = 1; w <= weight; w++) {
      const subResult = w - weightList[i - 1];
      if (subResult >= 0) {
        dp[w] = Math.max(previousDp[w], previousDp[subResult] + value[i - 1]);
      } else {
        dp[w] = previousDp[w];
      }
    }
  }

  return dp[weight];
}
