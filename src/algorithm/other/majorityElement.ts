// https://leetcode-cn.com/problems/majority-element/
// 169
export function majorityElement(nums: number[]): number {
  let index = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    nums[i] === nums[index] ? count++ : count--;
    if (count === -1) {
      index = i;
      count = 1;
    }
  }
  return nums[index];
}
