import { swap } from '../../utils';

// https://leetcode-cn.com/problems/sort-colors/
// 75
export function sortColors(nums: number[]): void {
  let p0 = 0;
  let p1 = 0;
  let p2 = nums.length - 1;
  while (p1 <= p2) {
    if (nums[p1] === 0) {
      swap(nums, p1, p0);
      p0++;
      p1++;
    } else if (nums[p1] === 1) {
      p1++;
    } else {
      swap(nums, p1, p2);
      p2--;
    }
  }
}
