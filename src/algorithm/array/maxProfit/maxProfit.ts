export function maxProfit(array: number[]): number {
  let totalProfit = 0;
  for (let i = 1; i < array.length; i++) {
    const dx = array[i] - array[i - 1];
    if (dx > 0) {
      totalProfit += dx;
    }
  }

  return totalProfit;
}
