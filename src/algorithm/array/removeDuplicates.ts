// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// 26
export function removeDuplicates(nums: number[]): number {
  let uniqueIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[uniqueIndex] !== nums[i]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex + 1;
}
