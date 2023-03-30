import { swap } from '../../utils';

// https://leetcode-cn.com/problems/sort-colors/
// 75
export function sortColors(nums: number[]): void {
  let p0 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      swap(nums, p0, i);
      p0++;
    }
  }

  let p1 = p0;
  for (let i = p1; i < nums.length; i++) {
    if (nums[i] === 1) {
      swap(nums, p1, i);
      p1++;
    }
  }
}

/*
function sortColors(nums: number[]): void {
  let p0 = 0;
  let p2 = nums.length - 1;
  let i = 0;

  while (i <= p2) {
    if (nums[i] === 0) {
      swap(nums, p0, i);
      p0++;
    } else if (nums[i] === 2) {
      swap(nums, p2, i);
      p2--;
      i--;
    }
    i++;
  }
}
*/
