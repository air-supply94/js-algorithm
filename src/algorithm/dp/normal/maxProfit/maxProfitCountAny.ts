// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
// 188
export function maxProfitCountAny(count: number, prices: number[]): number {
  count = Math.min(prices.length >>> 1, count);
  if (prices.length === 0) {
    return 0;
  }

  const dp: number[][][] = Array(prices.length)
    .fill(null)
    .map(() =>
      Array(count + 1)
        .fill(null)
        .map(() => Array(2).fill(0)),
    );

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j <= count; j++) {
      if (i === 0) {
        dp[i][j][0] = 0;
        dp[i][j][1] = -prices[i];
      } else {
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
        dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
      }
    }
  }

  return dp[prices.length - 1][count][0];
}
