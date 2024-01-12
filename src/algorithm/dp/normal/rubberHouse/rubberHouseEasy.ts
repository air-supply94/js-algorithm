// https://leetcode-cn.com/problems/house-robber/
// 198
// https://leetcode-cn.com/problems/the-masseuse-lcci/
// 金典-17.16
// top100
export function rubberHouseEasy(numbers: number[], startIndex = 0, endIndex = numbers.length - 1): number {
  let dp_i0 = 0;
  let dp_i1 = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    const tmp = dp_i1;
    dp_i1 = Math.max(dp_i1, dp_i0 + numbers[i]);
    dp_i0 = tmp;
  }

  return dp_i1;
}
