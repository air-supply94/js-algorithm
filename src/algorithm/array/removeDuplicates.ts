// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
// 26
export function removeDuplicates(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length;
  }

  let uniqueIndex = 0;
  let currentIndex = 1;
  while (currentIndex < nums.length) {
    if (nums[uniqueIndex] !== nums[currentIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[currentIndex];
    }
    currentIndex++;
  }

  return uniqueIndex + 1;
}
