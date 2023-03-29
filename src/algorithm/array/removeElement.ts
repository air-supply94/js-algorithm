// https://leetcode-cn.com/problems/remove-element/
// 27
export function removeElement(nums: number[], target: number): number {
  let nextNotMatchIndex = 0;
  let currentIndex = 0;
  while (currentIndex < nums.length) {
    if (nums[currentIndex] !== target) {
      nums[nextNotMatchIndex] = nums[currentIndex];
      nextNotMatchIndex++;
    }
    currentIndex++;
  }

  return nextNotMatchIndex;
}
