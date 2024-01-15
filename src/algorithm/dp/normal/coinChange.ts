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

  let tmpResult = Infinity;
  for (let i = 0; i < coins.length; i++) {
    const subResult = coinChange(coins, amount - coins[i], cache);
    if (subResult !== -1) {
      tmpResult = Math.min(tmpResult, subResult + 1);
    }
  }

  const result = tmpResult === Infinity ? -1 : tmpResult;
  cache.set(amount, result);
  return result;
}
*/

// https://leetcode-cn.com/problems/coin-change/
// 322
// top100
export function coinChange(coins: number[], amount: number): number {
  const dp = Array(amount + 1).fill(-1);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      const subChoice = i - coins[j];
      if (subChoice >= 0 && dp[subChoice] !== -1) {
        if (dp[i] === -1) {
          dp[i] = dp[subChoice] + 1;
        } else {
          dp[i] = Math.min(dp[i], dp[subChoice] + 1);
        }
      }
    }
  }

  return dp[amount];
}
