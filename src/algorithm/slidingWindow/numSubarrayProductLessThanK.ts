// https://leetcode-cn.com/problems/subarray-product-less-than-k/
// 713
// 区间计数
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let result = 0;
  let left = 0;
  let right = 0;
  let multiple = 1;
  let rightValue: number = null;

  while (right < nums.length) {
    rightValue = nums[right];
    right++;
    multiple *= rightValue;

    while (multiple >= k && left < right) {
      multiple /= nums[left];
      left++;
    }

    result += right - left;
  }

  return result;
}
