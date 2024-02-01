// https://leetcode.cn/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-100-liked
// 238
// top100
// 剑指offer 66
export function productExceptSelf(nums: number[]): number[] {
  const result = Array(nums.length).fill(1);
  let prefix = 1;
  let suffix = 1;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    result[i] *= prefix;
    result[j] *= suffix;
    prefix *= nums[i];
    suffix *= nums[j];
  }

  return result;
}
