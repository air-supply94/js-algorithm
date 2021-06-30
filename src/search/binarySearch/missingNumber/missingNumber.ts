export function missingNumber(nums: number[]): number {
  if (nums.length <= 1) {
    return 0;
  }

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

  return nums[start] - 1;
}
