// https://leetcode-cn.com/problems/edit-distance/
// 72
export function minDistance(str1: string, str2: string): number {
  const width = str1.length;
  const height = str2.length;

  const dp = Array(width + 1)
    .fill(null)
    .map((_, index) => index);

  for (let h = 1; h <= height; h++) {
    let tmp = dp[0];
    dp[0] = h;
    for (let w = 1; w <= width; w++) {
      const pre = tmp;
      tmp = dp[w];
      if (str1[w - 1] === str2[h - 1]) {
        dp[w] = pre;
      } else {
        dp[w] = Math.min(pre, dp[w - 1], dp[w]) + 1;
      }
    }
  }

  return dp[width];
}
