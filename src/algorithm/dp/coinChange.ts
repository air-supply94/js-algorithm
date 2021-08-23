/*
export function coinChange(coins: number[], amount: number, cache = new Map<number, number>()): number {
  if (amount === 0) {
    return 0;
  }

  if (amount < 0) {
    return -1;
  }

  if (cache.has(amount)) {
    return cache.get(amount);
  }

  let result = Infinity;
  for (let i = 0; i < coins.length; i++) {
    const subResult = coinChange(coins, amount - coins[i], cache);
    if (subResult !== -1) {
      result = Math.min(result, subResult + 1);
    }
  }

  cache.set(amount, result === Infinity ? -1 : result);
  return result === Infinity ? -1 : result;
}
*/

// https://leetcode-cn.com/problems/coin-change/
// 322
export function coinChange(coins: number[], amount: number): number {
  if (!coins.length || amount < 0) {
    return -1;
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
