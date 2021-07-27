// https://leetcode-cn.com/problems/one-away-lcci/
// 金典-01.05
export function oneEditAway(first: string, second: string): boolean {
  const n = first.length;
  const m = second.length;
  if (Math.abs(n - m) > 1) {
    return false;
  }

  let i = 0;
  let j = 0;
  let isFirstNotMatch = false;
  while (i < n && j < m) {
    if (first[i] === second[j]) {
      i++;
      j++;
    } else {
      if (isFirstNotMatch) {
        return false;
      }

      isFirstNotMatch = true;
      if (n === m) {
        i++;
        j++;
      } else if (n < m) {
        j++;
      } else {
        i++;
      }
    }
  }

  return true;
}
