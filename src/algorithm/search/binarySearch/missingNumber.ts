// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
// 剑指 Offer 53 - II. 0～n-1中缺失的数字
export function missingNumber(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let middle: number;

  while (left <= right) {
    middle = (left + right) >>> 1;
    if (middle === nums[middle]) {
      left = middle + 1;
    } else {
      // 可以简化为 right = middle - 1
      // middle刚好是缺失,left一定会加1
      right = left === right ? middle - 1 : middle;
    }
  }

  return left;
}
