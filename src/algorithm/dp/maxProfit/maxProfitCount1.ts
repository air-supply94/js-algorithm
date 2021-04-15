export function maxProfitCount1(prices: number[]): number {
  if (!prices.length) {
    return 0;
  }

  let dp_0 = 0;
  let dp_1 = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    dp_0 = Math.max(dp_0, dp_1 + prices[i]);
    dp_1 = Math.max(dp_1, -prices[i]);
  }

  return dp_0;
}
