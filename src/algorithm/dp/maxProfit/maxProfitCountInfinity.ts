// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// 122
export function maxProfitCountInfinity(prices: number[]): number {
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  let previous_dp_i_0 = 0;
  for (let i = 0; i < prices.length; i++) {
    previous_dp_i_0 = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, previous_dp_i_0 - prices[i]);
  }

  return dp_i_0;
}
