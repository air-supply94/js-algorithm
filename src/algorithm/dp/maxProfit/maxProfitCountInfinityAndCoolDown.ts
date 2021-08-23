// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// 309
export function maxProfitCountInfinityAndCoolDown(prices: number[]): number {
  let dp_i_0 = 0;
  let dp_i_1 = -Infinity;
  let previous = 0;
  let tmp = 0;
  for (let i = 0; i < prices.length; i++) {
    tmp = dp_i_0;
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
    dp_i_1 = Math.max(dp_i_1, previous - prices[i]);
    previous = tmp;
  }

  return dp_i_0;
}
