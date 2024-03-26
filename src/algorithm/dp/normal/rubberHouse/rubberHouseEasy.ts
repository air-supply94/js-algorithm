// https://leetcode-cn.com/problems/house-robber/
// 198
// https://leetcode-cn.com/problems/the-masseuse-lcci/
// 金典-17.16
// top100
export function rubberHouseEasy(numbers: number[], startIndex = 0, endIndex = numbers.length - 1): number {
  let previousValue = 0;
  let currentValue = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    const tmp = currentValue;
    currentValue = Math.max(currentValue, previousValue + numbers[i]);
    previousValue = tmp;
  }

  return currentValue;
}
