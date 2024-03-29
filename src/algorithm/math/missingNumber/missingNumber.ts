// https://leetcode-cn.com/problems/missing-number/
// 268
export function missingNumber(nums: number[]): number {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i] ^ (i + 1);
  }
  return result;
}
