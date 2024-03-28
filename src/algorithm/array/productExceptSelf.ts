// https://leetcode.cn/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-100-liked
// 238
// top100
// 剑指offer 66
export function productExceptSelf(nums: number[]): number[] {
  const result = Array(nums.length).fill(1);
  let leftResult = 1;
  let rightResult = 1;

  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    result[i] *= leftResult;
    result[j] *= rightResult;
    leftResult *= nums[i];
    rightResult *= nums[j];
  }

  return result;
}
