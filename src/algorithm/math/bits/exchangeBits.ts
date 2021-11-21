// https://leetcode-cn.com/problems/exchange-lcci/
// 金典-05.07
export function exchangeBits(num: number): number {
  const oddMask = 0x55555555;
  const evenMask = 0xaaaaaaaa;
  return ((num & oddMask) << 1) | ((num & evenMask) >> 1);
}
