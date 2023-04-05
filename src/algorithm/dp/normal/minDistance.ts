// https://leetcode-cn.com/problems/edit-distance/
// 72
export function minDistance(str1: string, str2: string): number {
  const height = str1.length;
  const width = str2.length;

  const dp = Array(width + 1).fill(null);
  for (let i = 0; i <= width; i++) {
    dp[i] = i;
  }

  for (let h = 1; h <= height; h++) {
    let nextPre = dp[0];
    dp[0] = h;
    for (let w = 1; w <= width; w++) {
      const pre = nextPre;
      nextPre = dp[w];
      if (str1[h - 1] === str2[w - 1]) {
        dp[w] = pre;
      } else {
        dp[w] = Math.min(pre, dp[w - 1], dp[w]) + 1;
      }
    }
  }

  return dp[width];
}
