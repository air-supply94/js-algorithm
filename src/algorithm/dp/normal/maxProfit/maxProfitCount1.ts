// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
// 121
// top100
// 剑指offer63
export function maxProfitCount1(prices: number[]): number {
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, -prices[i]);
  }

  return dp_i_0;
}
