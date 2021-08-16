// https://leetcode-cn.com/problems/remove-element/
// 27
export function removeElement(nums: number[], target: number): number {
  let position = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      nums[position] = nums[i];
      position++;
    }
  }

  return position;
}
