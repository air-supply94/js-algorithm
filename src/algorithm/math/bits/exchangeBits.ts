// https://leetcode-cn.com/problems/exchange-lcci/
// 金典-05.07
export function exchangeBits(num: number): number {
  const oddMask = 0b0101010101010101010101010101010101010101;
  const evenMask = 0b1010101010101010101010101010101010101010;
  return ((num & oddMask) << 1) | ((num & evenMask) >> 1);
}
