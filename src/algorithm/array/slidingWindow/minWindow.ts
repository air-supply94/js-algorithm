// https://leetcode-cn.com/problems/minimum-window-substring/
// 76
// 最短区间
export function minWindow(s: string, t: string): string {
  const needCharMap = new Map<string, number>();
  const matchCharMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let matchCharCount = 0;
  let length = Infinity;
  let start = 0;

  for (let i = 0; i < t.length; i++) {
    needCharMap.set(t[i], (needCharMap.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (needCharMap.has(rightChar)) {
      matchCharMap.set(rightChar, (matchCharMap.get(rightChar) || 0) + 1);
      if (needCharMap.get(rightChar) === matchCharMap.get(rightChar)) {
        matchCharCount++;
      }
    }

    while (matchCharCount && matchCharCount === needCharMap.size) {
      if (right - left < length) {
        length = right - left;
        start = left;
      }

      const leftChar = s[left];
      left++;
      if (needCharMap.has(leftChar)) {
        if (needCharMap.get(leftChar) === matchCharMap.get(leftChar)) {
          matchCharCount--;
        }
        matchCharMap.set(leftChar, matchCharMap.get(leftChar) - 1);
      }
    }
  }

  return length === Infinity ? '' : s.substr(start, length);
}
