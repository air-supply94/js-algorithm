// https://leetcode-cn.com/problems/powx-n/
// 50
export function fastPowering(base: number, power: number): number {
  if (power === 0) {
    return 1;
  } else if (power === 1) {
    return base;
  } else if (power === -1) {
    return 1 / base;
  } else if (power % 2 === 0) {
    const multiplier = fastPowering(base, power >> 1);
    return multiplier * multiplier;
  } else {
    const multiplier = fastPowering(base, power >> 1);
    return multiplier * multiplier * base;
  }
}
