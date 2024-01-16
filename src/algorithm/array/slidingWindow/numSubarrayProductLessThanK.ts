// https://leetcode-cn.com/problems/subarray-product-less-than-k/
// 713
// 区间计数
// top100
export function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0;
  }

  let result = 0;
  let left = 0;
  let right = 0;
  let multiple = 1;

  while (right < nums.length) {
    const rightValue = nums[right];
    right++;
    multiple *= rightValue;

    while (multiple >= k) {
      const leftValue = nums[left];
      left++;
      multiple /= leftValue;
    }

    // 每次右指针位移到一个新位置,新增的组合(左闭右开区间)
    //  nums[right - 1]
    //  nums[right - 2], nums[right - 1]
    //  nums[left], ......, nums[right - 2], nums[right - 1]
    // count = (right - 1) - left + 1 = right - left
    result += right - left;
  }

  return result;
}
