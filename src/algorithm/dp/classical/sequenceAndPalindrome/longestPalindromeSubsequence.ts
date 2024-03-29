// https://leetcode-cn.com/problems/longest-palindromic-subsequence/
// 516
export function longestPalindromeSubsequence(str: string): number {
  const length = str.length;
  const dp = Array(length + 1).fill(1);
  dp[0] = 0;

  for (let i = length; i >= 1; i--) {
    let pre = 0;
    for (let j = i + 1; j <= length; j++) {
      const tmp = dp[j];
      if (str[i - 1] === str[j - 1]) {
        dp[j] = pre + 2;
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      pre = tmp;
    }
  }

  return dp[length];
}
