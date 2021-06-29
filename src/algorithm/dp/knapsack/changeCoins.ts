export function changeCoins(amount: number, weightList: number[]): number {
  const count = weightList.length;
  const weight = amount;

  const dp = Array(weight + 1)
    .fill(0);
  dp[0] = 1;

  for (let i = 1; i <= count; i++) {
    for (let w = 1; w <= weight; w++) {
      const pre = dp[w];
      if (w - weightList[i - 1] >= 0) {
        dp[w] = pre + dp[w - weightList[i - 1]];
      } else {
        dp[w] = pre;
      }
    }
  }

  return dp[weight];
}
