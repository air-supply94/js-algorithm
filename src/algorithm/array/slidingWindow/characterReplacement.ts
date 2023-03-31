// https://leetcode-cn.com/problems/longest-repeating-character-replacement/
// 424
// 最长区间
export function characterReplacement(s: string, k: number): number {
  const charCountMap = new Map<string, number>();
  let left = 0;
  let right = 0;
  let length = 0;
  let maxCharCount = 0;

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    charCountMap.set(rightChar, (charCountMap.get(rightChar) || 0) + 1);
    maxCharCount = Math.max(maxCharCount, charCountMap.get(rightChar));

    if (right - left - maxCharCount > k) {
      const leftChar = s[left];
      left++;
      charCountMap.set(leftChar, charCountMap.get(leftChar) - 1);
    }

    length = Math.max(length, right - left);
  }

  return length;
}
