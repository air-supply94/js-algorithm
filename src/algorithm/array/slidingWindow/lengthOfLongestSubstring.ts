// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
// 3
export function lengthOfLongestSubstring(s: string): number {
  const countMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let length = 0;

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    countMap.set(rightChar, (countMap.get(rightChar) || 0) + 1);

    while (countMap.get(rightChar) > 1) {
      const leftChar = s[left];
      left++;
      countMap.set(leftChar, countMap.get(leftChar) - 1);
    }

    length = Math.max(length, right - left);
  }

  return length;
}
