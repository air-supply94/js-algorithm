export function missingNumber(nums: number[]): number {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    result ^= nums[i];
  }

  for (let i = 0; i <= n; i++) {
    result ^= i;
  }

  return result;
}
