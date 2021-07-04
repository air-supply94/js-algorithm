// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
// 3
export function lengthOfLongestSubstring(s: string): number {
  const slidingWindow = new Map<string, number>();
  let left = 0;
  let right = 0;
  let length = 0;

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    slidingWindow.set(rightChar, (slidingWindow.get(rightChar) || 0) + 1);

    while (slidingWindow.get(rightChar) > 1) {
      const leftChar = s[left];
      left++;
      slidingWindow.set(leftChar, slidingWindow.get(leftChar) - 1);
    }

    length = Math.max(length, right - left);
  }

  return length;
}
