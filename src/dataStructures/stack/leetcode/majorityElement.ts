export function majorityElement(nums: number[]): number {
  let index = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i += 1) {
    nums[index] === nums[i] ? count += 1 : count -= 1;
    if (count === 0) {
      index = i;
      count = 1;
    }
  }
  return nums[index];
}
