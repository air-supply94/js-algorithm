function getLongestPalindromeLength(s: string, leftIndex: number, rightIndex: number): number {
  let left = leftIndex;
  let right = rightIndex;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

export function longestPalindrome(str: string): string {
  if (str.length < 1) {
    return '';
  }

  let start = 0;
  let end = 0;

  for (let i = 0; i < str.length; i++) {
    const len = Math.max(getLongestPalindromeLength(str, i, i), getLongestPalindromeLength(str, i, i + 1));
    if (len > end - start + 1) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  return str.substring(start, end + 1);
}
