export function maxProfitCount2(prices: number[]): number {
  if (!prices.length) {
    return 0;
  }

  let dp_2_0 = 0;
  let dp_2_1 = -Infinity;
  let dp_1_0 = 0;
  let dp_1_1 = -Infinity;

  for (let i = 0; i < prices.length; i++) {
    dp_2_0 = Math.max(dp_2_0, dp_2_1 + prices[i]);
    dp_2_1 = Math.max(dp_2_1, dp_1_0 - prices[i]);
    dp_1_0 = Math.max(dp_1_0, dp_1_1 + prices[i]);
    dp_1_1 = Math.max(dp_1_1, -prices[i]);
  }

  return dp_2_0;
}
