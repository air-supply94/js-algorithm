export function coinChange(coins: number[], amount: number): number {
  if (!coins.length || amount < 0) {
    return -1;
  }

  if (amount === 0) {
    return 0;
  }

  const dp = Array(amount + 1)
    .fill(-1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i >= coins[j] && dp[i - coins[j]] >= 0) {
        if (dp[i] === -1) {
          dp[i] = dp[i - coins[j]] + 1;
        } else {
          dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
        }
      }
    }
  }

  return dp[amount];
}
