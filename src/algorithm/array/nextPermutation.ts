
import { reverse } from '../../utils';

// https://leetcode.cn/problems/next-permutation/description/?envType=study-plan-v2&envId=top-100-liked
// 31
// top100
export function nextPermutation(nums: number[]): void {
  let minIndex = nums.length - 2;
  while (minIndex >= 0 && nums[minIndex] >= nums[minIndex + 1]) {
    minIndex--;
  }

  if (minIndex >= 0) {
    let maxIndex = nums.length - 1;
    while (maxIndex >= 0 && nums[minIndex] >= nums[maxIndex]) {
      maxIndex--;
    }
    const tmp = nums[minIndex];
    nums[minIndex] = nums[maxIndex];
    nums[maxIndex] = tmp;
  }

  reverse(nums, minIndex + 1, nums.length - 1);
}
