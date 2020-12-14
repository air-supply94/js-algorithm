export function minDistance(str1: string, str2: string): number {
  const w = str1.length;
  const h = str2.length;

  if (w * h == 0) {
    return w + h;
  }

  const dp = Array(w + 1);
  for (let i = 0; i < w + 1; i++) {
    dp[i] = i;
  }

  for (let i = 1; i < h + 1; i++) {
    let tmp = dp[0];
    dp[0] = i;
    for (let j = 1; j < w + 1; j++) {
      const pre = tmp;
      tmp = dp[j];
      if (str1[j - 1] === str2[i - 1]) {
        dp[j] = pre;
      } else {
        dp[j] = Math.min(pre, dp[j - 1], dp[j]) + 1;
      }
    }
  }

  return dp[w];
}
