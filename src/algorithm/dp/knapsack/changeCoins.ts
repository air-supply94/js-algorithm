export function changeCoins(amount: number, weightList: number[]): number {
  const count = weightList.length;
  const weight = amount;

  const dp = Array(count + 1)
    .fill(null)
    .map(() => Array(weight + 1)
      .fill(0));

  for (let i = 0; i <= count; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= count; i++) {
    for (let w = 1; w <= weight; w++) {
      if (w - weightList[i - 1] >= 0) {
        dp[i][w] = dp[i - 1][w] + dp[i][w - weightList[i - 1]];
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[count][weight];
}
