// https://leetcode-cn.com/problems/powx-n/
// 50
// 剑指 Offer 16
export function fastPowering(base: number, power: number): number {
  if (power === 0) {
    return 1;
  }

  if (power === 1) {
    return base;
  }

  if (power === -1) {
    return 1 / base;
  }

  if ((power & 1) === 0) {
    const multiplier = fastPowering(base, power >> 1);
    return multiplier * multiplier;
  } else {
    const multiplier = fastPowering(base, power >> 1);
    return multiplier * multiplier * base;
  }
}
