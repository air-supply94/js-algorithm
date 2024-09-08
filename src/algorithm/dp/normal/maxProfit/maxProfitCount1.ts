// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// 121
// top100
export function maxProfitCount1(prices: number[]): number {
  let dp_i_1_0 = 0;
  let dp_i_1_1 = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < prices.length; i++) {
    dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + prices[i]);
    dp_i_1_1 = Math.max(dp_i_1_1, -prices[i]);
  }

  return dp_i_1_0;
}
