// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
// 122
export function maxProfitCountInfinity(prices: number[]): number {
  let dp_i_n_0 = 0;
  let dp_i_n_1 = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < prices.length; i++) {
    const tmp_dp_i_n_0 = dp_i_n_0;
    dp_i_n_0 = Math.max(dp_i_n_0, dp_i_n_1 + prices[i]);
    dp_i_n_1 = Math.max(dp_i_n_1, tmp_dp_i_n_0 - prices[i]);
  }

  return dp_i_n_0;
}
