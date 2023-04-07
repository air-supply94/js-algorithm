// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
// 1312
export function minPalindromeInsert(str: string): number {
  const dp = Array(str.length).fill(0);

  for (let i = str.length - 1; i >= 0; i--) {
    let nextPrevious = 0;
    for (let j = i + 1; j < str.length; j++) {
      const previous = nextPrevious;
      nextPrevious = dp[j];
      if (str[i] === str[j]) {
        dp[j] = previous;
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + 1;
      }
    }
  }

  return dp[str.length - 1];
}
