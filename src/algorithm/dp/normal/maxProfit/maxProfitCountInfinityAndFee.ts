// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
// 714
export function maxProfitCountInfinityAndFee(prices: number[], fee: number): number {
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    const dp_i_0_tmp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, dp_i_0_tmp - prices[i] - fee);
  }

  return dp_i_0;
}
