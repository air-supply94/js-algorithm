// https://leetcode-cn.com/problems/longest-repeating-character-replacement/
// 424
// 最长区间
export function characterReplacement(s: string, k: number): number {
  const countList = new Map<string, number>();
  let left = 0;
  let right = 0;
  let length = 0;
  let maxOneLength = 0;

  while (right < s.length) {
    const rightChar = s[right];
    right++;
    countList.set(rightChar, (countList.get(rightChar) || 0) + 1);
    maxOneLength = Math.max(maxOneLength, countList.get(rightChar));

    if (right - left - maxOneLength > k) {
      const leftChar = s[left];
      left++;
      countList.set(leftChar, countList.get(leftChar) - 1);
    }

    length = Math.max(length, right - left);
  }

  return length;
}
