// https://leetcode-cn.com/problems/longest-valid-parentheses/
// 32
export function longestValidParentheses(s: string): number {
  const dp = Array(s.length)
    .fill(0);
  let max = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === ')') {
      if (s[i - 1] === '(') {
        dp[i] += 2;
        dp[i] += i - 2 > 0 ? dp[i - 2] : 0;
      } else {
        if (dp[i - 1] > 0 && i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
          dp[i] = dp[i - 1] + 2;
          dp[i] += i - dp[i - 1] - 2 >= 0 ? dp[i - dp[i - 1] - 2] : 0;
        }
      }

      max = Math.max(max, dp[i]);
    }
  }

  return max;
}
