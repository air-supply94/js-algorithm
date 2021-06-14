export function minWindow(s: string, t: string): string {
  const need = new Map<string, number>();
  const slidingWindow = new Map<string, number>();
  let valid = 0;
  let left = 0;
  let right = 0;
  let len = Infinity;
  let start = 0;

  for (let i = 0; i < t.length; i++) {
    need.set(t[i], (need.get(t[i]) || 0) + 1);
  }

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    if (need.has(rightChar)) {
      slidingWindow.set(rightChar, (slidingWindow.get(rightChar) || 0) + 1);
      if (slidingWindow.get(rightChar) === need.get(rightChar)) {
        valid++;
      }
    }

    while (valid === t.length) {
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      const leftChar = s[left];
      left++;
      if (need.has(leftChar)) {
        if (slidingWindow.get(leftChar) === need.get(leftChar)) {
          valid--;
        }
        slidingWindow.set(leftChar, slidingWindow.get(leftChar) - 1);
      }
    }
  }

  if (len === Infinity) {
    return '';
  } else {
    return s.substr(start, len);
  }
}
