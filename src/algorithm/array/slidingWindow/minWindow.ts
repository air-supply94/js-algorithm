// https://leetcode-cn.com/problems/minimum-window-substring/
// 76
export function minWindow(s: string, t: string): string {
  const needMap = new Map<string, number>();
  const countMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let windowSize = 0;
  let length = Infinity;
  let start = 0;

  for (let i = 0; i < t.length; i++) {
    needMap.set(t[i], (needMap.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (needMap.has(rightChar)) {
      countMap.set(rightChar, (countMap.get(rightChar) || 0) + 1);
      if (needMap.get(rightChar) === countMap.get(rightChar)) {
        windowSize++;
      }
    }

    while (windowSize && windowSize === needMap.size) {
      if (right - left < length) {
        length = right - left;
        start = left;
      }

      const leftChar = s[left];
      left++;
      if (needMap.has(leftChar)) {
        if (needMap.get(leftChar) === countMap.get(leftChar)) {
          windowSize--;
        }
        countMap.set(leftChar, countMap.get(leftChar) - 1);
      }
    }
  }

  if (length !== Infinity) {
    return s.substr(start, length);
  } else {
    return '';
  }
}
