import { rubberHouseEasy } from './rubberHouseEasy';

// https://leetcode-cn.com/problems/house-robber-ii/
// 213
export function rubberHouseMedium(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  if (numbers.length === 1) {
    return numbers[0];
  }

  return Math.max(
    rubberHouseEasy(numbers, 0, numbers.length - 2),
    rubberHouseEasy(numbers, 1, numbers.length - 1)
  );
}

