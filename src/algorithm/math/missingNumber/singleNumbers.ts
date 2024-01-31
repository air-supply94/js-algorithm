// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/
// 剑指 Offer 56
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

// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/
export function singleNumber(nums: number[]): number {
  let res = 0;

  for (let i = 0; i < 32; i++) {
    let tmp = 0;
    for (let j = 0; j < nums.length; j++) {
      tmp += (nums[j] >>> i) & 1;
    }
    if (tmp % 3 === 1) {
      res |= (1 << i);
    }
  }

  return res;
}
