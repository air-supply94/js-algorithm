// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
// 剑指 Offer 56-1
export function singleNumbers(nums: number[]): number[] {
  let xor = 0;
  let xor1 = 0;

  for (let i = 0; i < nums.length; i++) {
    xor ^= nums[i];
  }

  const rightBit = xor & -xor;
  for (let i = 0; i < nums.length; i++) {
    if (rightBit & nums[i]) {
      xor1 ^= nums[i];
    }
  }

  return [
    xor1,
    xor1 ^ xor,
  ];
}
