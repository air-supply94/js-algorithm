// https://leetcode-cn.com/problems/set-mismatch/
// 645
// https://leetcode-cn.com/problems/missing-two-lcci/
// 金典-17.19
export function findErrorNums(nums: number[]): number[] {
  let xor = 0;
  let xor1 = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    xor ^= nums[i];
    xor ^= i + 1;
  }

  const rightBit = xor & -xor;
  for (let i = 0; i < n; i++) {
    if (rightBit & nums[i]) {
      xor1 ^= nums[i];
    }

    if (rightBit & i + 1) {
      xor1 ^= i + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] === xor1) {
      return [
        xor1,
        xor1 ^ xor,
      ];
    }
  }

  return [
    xor1 ^ xor,
    xor1,
  ];
}
