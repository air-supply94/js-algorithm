// https://leetcode-cn.com/problems/permutation-in-string/
// 567
// 定长区间
export function checkInclusion(t: string, s: string): boolean {
  const needCharMap = new Map<string, number>();
  const matchCharMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let matchCharCount = 0;

  for (let i = 0; i < t.length; i++) {
    needCharMap.set(t[i], (needCharMap.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (needCharMap.has(rightChar)) {
      matchCharMap.set(rightChar, (matchCharMap.get(rightChar) || 0) + 1);
      if (matchCharMap.get(rightChar) === needCharMap.get(rightChar)) {
        matchCharCount++;
      }
    }

    while (right - left === t.length) {
      if (matchCharCount === needCharMap.size) {
        return true;
      }

      const leftChar = s[left];
      left++;
      if (needCharMap.has(leftChar)) {
        if (matchCharMap.get(leftChar) === needCharMap.get(leftChar)) {
          matchCharCount--;
        }
        matchCharMap.set(leftChar, matchCharMap.get(leftChar) - 1);
      }
    }
  }

  return false;
}
