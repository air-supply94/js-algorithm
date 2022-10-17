// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// 309
export function maxProfitCountInfinityAndCoolDown(prices: number[]): number {
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;

  // dp[i - 2][0]
  let previous = 0;
  let previous_dp_i_0 = 0;
  for (let i = 0; i < prices.length; i++) {
    previous_dp_i_0 = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, previous - prices[i]);
    previous = previous_dp_i_0;
  }

  return dp_i_0;
}
