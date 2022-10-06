// https://leetcode-cn.com/problems/permutation-in-string/
// 567
// 定长区间
export function checkInclusion(t: string, s: string): boolean {
  const needMap = new Map<string, number>();
  const matchMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let matchCount = 0;

  for (let i = 0; i < t.length; i++) {
    needMap.set(t[i], (needMap.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (needMap.has(rightChar)) {
      matchMap.set(rightChar, (matchMap.get(rightChar) || 0) + 1);
      if (matchMap.get(rightChar) === needMap.get(rightChar)) {
        matchCount++;
      }
    }

    while (right - left === t.length) {
      if (matchCount === needMap.size) {
        return true;
      }

      const leftChar = s[left];
      left++;
      if (needMap.has(leftChar)) {
        if (matchMap.get(leftChar) === needMap.get(leftChar)) {
          matchCount--;
        }
        matchMap.set(leftChar, matchMap.get(leftChar) - 1);
      }
    }
  }

  return false;
}
