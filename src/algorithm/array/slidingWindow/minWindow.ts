export function minWindow(s: string, t: string): string {
  const need = new Map<string, number>();
  const slidingWindow = new Map<string, number>();
  let windowSize = 0;
  let left = 0;
  let right = 0;
  let resultLength = 0;
  let resultStart = 0;

  for (let i = 0; i < t.length; i++) {
    need.set(t[i], (need.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (need.has(rightChar)) {
      slidingWindow.set(rightChar, (slidingWindow.get(rightChar) || 0) + 1);
      if (slidingWindow.get(rightChar) === need.get(rightChar)) {
        windowSize++;
      }
    }

    while (windowSize && windowSize === need.size) {
      if (resultLength === 0 || right - left < resultLength) {
        resultStart = left;
        resultLength = right - left;
      }

      const leftChar = s[left];
      left++;
      if (need.has(leftChar)) {
        if (slidingWindow.get(leftChar) === need.get(leftChar)) {
          windowSize--;
        }
        slidingWindow.set(leftChar, slidingWindow.get(leftChar) - 1);
      }
    }
  }

  if (resultLength) {
    return s.substr(resultStart, resultLength);
  } else {
    return '';
  }
}
