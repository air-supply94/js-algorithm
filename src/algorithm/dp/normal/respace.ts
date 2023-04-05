// https://leetcode-cn.com/problems/re-space-lcci/
// 17.13. 恢复空格
export function respace(dictionary: string[], sentence: string): number {
  const wordSet = new Set<string>(dictionary);
  const n = sentence.length;

  // i结尾的字符串最少数量
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    for (let j = 1; j <= i; j++) {
      if (wordSet.has(sentence.slice(j - 1, i))) {
        dp[i] = Math.min(dp[j - 1], dp[i]);
      }
    }
  }

  return dp[n];
}
