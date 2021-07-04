// https://leetcode-cn.com/problems/longest-palindromic-subsequence/
// 516
export function longestPalindromeSubsequence(str: string): number {
  if (!str.length) {
    return 0;
  }

  const dp = Array(str.length)
    .fill(null)
    .map(() => Array(str.length)
      .fill(0));

  for (let i = 0; i < str.length; i++) {
    dp[i][i] = 1;
  }

  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[0][str.length - 1];
}
