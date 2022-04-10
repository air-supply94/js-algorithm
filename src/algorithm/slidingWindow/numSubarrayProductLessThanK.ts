// https://leetcode-cn.com/problems/subarray-product-less-than-k/
// 713
// 区间计数
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0;
  }

  let result = 0;
  let left = 0;
  let right = 0;
  let multiple = 1;

  while (right < nums.length) {
    multiple *= nums[right];
    right++;

    while (multiple >= k) {
      multiple /= nums[left];
      left++;
    }

    result += right - left;
  }

  return result;
}
