// https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/submissions/
// 3
// 最长区间
// top100
export function lengthOfLongestSubstring(s: string): number {
  const charCountMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let length = 0;

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    charCountMap.set(rightChar, (charCountMap.get(rightChar) || 0) + 1);

    while (charCountMap.get(rightChar) > 1) {
      const leftChar = s[left];
      left++;
      charCountMap.set(leftChar, charCountMap.get(leftChar) - 1);
    }

    length = Math.max(length, right - left);
  }

  return length;
}
