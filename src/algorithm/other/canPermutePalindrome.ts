// https://leetcode-cn.com/problems/palindrome-permutation-lcci/
// 金典01.04
export function canPermutePalindrome(s: string): boolean {
  const charMap = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], (charMap.get(s[i]) || 0) + 1);
  }

  let isFirstOdd = false;
  for (const count of charMap.values()) {
    if (count % 2 === 1) {
      if (isFirstOdd) {
        return false;
      }
      isFirstOdd = true;
    }
  }

  return true;
}
