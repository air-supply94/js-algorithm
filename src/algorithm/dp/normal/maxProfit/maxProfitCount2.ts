// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
// 123
export function maxProfitCount2(prices: number[]): number {
  let dp_i_2_0 = 0;
  let dp_i_2_1 = Number.NEGATIVE_INFINITY;
  let dp_i_1_0 = 0;
  let dp_i_1_1 = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < prices.length; i++) {
    dp_i_2_0 = Math.max(dp_i_2_0, dp_i_2_1 + prices[i]);
    dp_i_2_1 = Math.max(dp_i_2_1, dp_i_1_0 - prices[i]);
    dp_i_1_0 = Math.max(dp_i_1_0, dp_i_1_1 + prices[i]);
    dp_i_1_1 = Math.max(dp_i_1_1, -prices[i]);
  }

  return dp_i_2_0;
}
