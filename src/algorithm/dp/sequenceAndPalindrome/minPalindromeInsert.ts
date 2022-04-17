// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
// 1312
export function minPalindromeInsert(str: string): number {
  if (!str.length) {
    return 0;
  }

  const dp = Array(str.length)
    .fill(null)
    .map(() => Array(str.length)
      .fill(0));

  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[0][str.length - 1];
}
