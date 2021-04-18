import { maxProfitCountInfinity } from './maxProfitCountInfinity';

export function maxProfitCountAny(prices: number[], count: number): number {
  if (!prices.length) {
    return 0;
  }

  if (count > Math.floor(prices.length / 2)) {
    return maxProfitCountInfinity(prices);
  }

  const dp = Array(prices.length)
    .fill(null)
    .map(() => Array(count + 1)
      .fill(null)
      .map(() => Array(2)
        .fill(0)));

  for (let i = 0; i < prices.length; i++) {
    for (let j = count; j >= 1; j--) {
      if (i === 0) {
        dp[i][j][0] = Math.max(0, -Infinity + prices[i]);
        dp[i][j][1] = Math.max(-Infinity, -prices[i]);
      } else {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
        dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
      }
    }
  }

  return dp[prices.length - 1][count][0];
}
