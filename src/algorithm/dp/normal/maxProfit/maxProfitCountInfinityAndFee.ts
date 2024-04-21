// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
// 714
export function maxProfitCountInfinityAndFee(prices: number[], fee: number): number {
  let dp_i_n_0 = 0;
  let dp_i_n_1 = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    const tmp_dp_i_n_0 = dp_i_n_0;
    dp_i_n_0 = Math.max(dp_i_n_0, dp_i_n_1 + prices[i]);
    dp_i_n_1 = Math.max(dp_i_n_1, tmp_dp_i_n_0 - prices[i] - fee);
  }

  return dp_i_n_0;
}
