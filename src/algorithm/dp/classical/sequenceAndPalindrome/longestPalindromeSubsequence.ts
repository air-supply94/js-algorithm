// https://leetcode-cn.com/problems/longest-palindromic-subsequence/
// 516
export function longestPalindromeSubsequence(str: string): number {
  const dp = Array(str.length).fill(1);

  for (let i = str.length - 1; i >= 0; i--) {
    let nextPrevious = 0;
    for (let j = i + 1; j < str.length; j++) {
      const previous = nextPrevious;
      nextPrevious = dp[j];
      if (str[i] === str[j]) {
        dp[j] = previous + 2;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
    }
  }

  return dp[str.length - 1];
}
