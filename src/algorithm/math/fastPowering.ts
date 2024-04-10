// https://leetcode-cn.com/problems/powx-n/
// 50
// 剑指 Offer
// https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00
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
