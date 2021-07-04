function getLongestPalindrome(s: string, leftStart: number, rightStart: number): string {
  let left = leftStart;
  let right = rightStart;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.substr(left + 1, right - left - 1);
}

// https://leetcode-cn.com/problems/longest-palindromic-substring/
// 5
export function longestPalindrome(str: string): string {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const str1 = getLongestPalindrome(str, i, i);
    const str2 = getLongestPalindrome(str, i, i + 1);

    if (str1.length > result.length) {
      result = str1;
    }

    if (str2.length > result.length) {
      result = str2;
    }
  }

  return result;
}
