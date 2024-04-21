// https://leetcode.cn/problems/word-break/?envType=study-plan-v2&envId=top-100-liked
// 139
// top100
export function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set<string>(wordDict);
  const dp: boolean[] = Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= i; j++) {
      const subStr = s.slice(j - 1, i);
      if (wordSet.has(subStr)) {
        dp[i] ||= dp[j - 1];
      }
    }
  }

  return dp[s.length];
}
