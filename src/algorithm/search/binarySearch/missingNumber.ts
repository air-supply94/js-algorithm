// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
// 剑指 Offer 53 - II. 0～n-1中缺失的数字
export function missingNumber(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;
  let middle: number;

  while (start <= end) {
    middle = start + Math.floor((end - start) / 2);
    if (middle === nums[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return start;
}
