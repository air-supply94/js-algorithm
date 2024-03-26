// https://leetcode-cn.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/
// 1312
export function minInsertions(str: string): number {
  const length = str.length;
  const dp = Array(length + 1).fill(0);

  for (let i = length; i >= 1; i--) {
    let pre = 0;
    for (let j = i + 1; j <= length; j++) {
      const tmp = dp[j];
      if (str[i - 1] === str[j - 1]) {
        dp[j] = pre;
      } else {
        dp[j] = Math.min(dp[j], dp[j - 1]) + 1;
      }
      pre = tmp;
    }
  }

  return dp[length];
}
