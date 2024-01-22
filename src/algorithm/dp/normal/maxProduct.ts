// https://leetcode.cn/problems/maximum-product-subarray/description/?envType=study-plan-v2&envId=top-100-liked
// 152
// top100
export function maxProduct(nums: number[]): number {
  let result = nums[0];
  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const tmp = max;
    max = Math.max(Math.max(max * nums[i], nums[i]), min * nums[i]);
    min = Math.min(Math.min(min * nums[i], nums[i]), tmp * nums[i]);
    result = Math.max(result, max);
  }

  return result;
}
