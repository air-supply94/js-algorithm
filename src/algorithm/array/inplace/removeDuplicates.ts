export function removeDuplicates(nums: number[]): number {
  let uniqueIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[uniqueIndex] !== nums[i]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex + 1;
}
