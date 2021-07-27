// https://leetcode-cn.com/problems/is-unique-lcci/
// 金典01.01
export function isUnique(str: string): boolean {
  let bitMap = 0;
  const base = 'a'.charCodeAt(0);
  let tmp = 0;

  for (let i = 0; i < str.length; i++) {
    tmp = 1 << (str.charCodeAt(i) - base);
    if (bitMap & tmp) {
      return false;
    }
    bitMap |= tmp;
  }

  return true;
}
