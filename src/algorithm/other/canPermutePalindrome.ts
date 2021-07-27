// https://leetcode-cn.com/problems/palindrome-permutation-lcci/
// 金典01.04
export function canPermutePalindrome(s: string): boolean {
  const charMap = Object.create(null);
  for (let i = 0; i < s.length; i++) {
    charMap[s[i]] = (charMap[s[i]] || 0) + 1;
  }

  let count = 0;
  const values: number[] = Object.values(charMap);
  for (let i = 0; i < values.length; i++) {
    if (values[i] & 1) {
      count++;
      if (count > 1) {
        return false;
      }
    }
  }

  return true;
}
