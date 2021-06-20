export function missingNumber(nums: number[]): number {
  const n = nums.length;
  let result = n;

  for (let i = 0; i < n; i++) {
    result ^= i ^ nums[i];
  }

  return result;
}
