// https://leetcode-cn.com/problems/minimum-window-substring/
// 76
// 最短区间
export function minWindow(s: string, t: string): string {
  const needMap = new Map<string, number>();
  const matchMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let matchCharLength = 0;
  let length = Infinity;
  let start = 0;

  for (let i = 0; i < t.length; i++) {
    needMap.set(t[i], (needMap.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (needMap.has(rightChar)) {
      matchMap.set(rightChar, (matchMap.get(rightChar) || 0) + 1);
      if (needMap.get(rightChar) === matchMap.get(rightChar)) {
        matchCharLength++;
      }
    }

    while (matchCharLength && matchCharLength === needMap.size) {
      if (right - left < length) {
        length = right - left;
        start = left;
      }

      const leftChar = s[left];
      left++;
      if (needMap.has(leftChar)) {
        if (needMap.get(leftChar) === matchMap.get(leftChar)) {
          matchCharLength--;
        }
        matchMap.set(leftChar, matchMap.get(leftChar) - 1);
      }
    }
  }

  return length === Infinity ? '' : s.substr(start, length);
}
