export function minDistance(str1: string, str2: string): number {
  const width = str1.length;
  const height = str2.length;

  const dp = Array(width + 1);
  for (let i = 0; i <= width; i++) {
    dp[i] = i;
  }

  for (let i = 1; i <= height; i++) {
    let tmp = dp[0];
    dp[0] = i;
    for (let j = 1; j <= width; j++) {
      const pre = tmp;
      tmp = dp[j];
      if (str1[j - 1] === str2[i - 1]) {
        dp[j] = pre;
      } else {
        dp[j] = Math.min(pre, dp[j - 1], dp[j]) + 1;
      }
    }
  }

  return dp[width];
}
