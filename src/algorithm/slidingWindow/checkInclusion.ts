// https://leetcode-cn.com/problems/permutation-in-string/
// 567
// 定长区间
export function checkInclusion(t: string, s: string): boolean {
  const needMap = new Map<string, number>();
  const countMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let windowSize = 0;

  for (let i = 0; i < t.length; i++) {
    needMap.set(t[i], (needMap.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (needMap.has(rightChar)) {
      countMap.set(rightChar, (countMap.get(rightChar) || 0) + 1);
      if (countMap.get(rightChar) === needMap.get(rightChar)) {
        windowSize++;
      }
    }

    while (right - left === t.length) {
      if (windowSize === needMap.size) {
        return true;
      }

      const leftChar = s[left];
      left++;
      if (needMap.has(leftChar)) {
        if (countMap.get(leftChar) === needMap.get(leftChar)) {
          windowSize--;
        }
        countMap.set(leftChar, countMap.get(leftChar) - 1);
      }
    }
  }

  return false;
}
