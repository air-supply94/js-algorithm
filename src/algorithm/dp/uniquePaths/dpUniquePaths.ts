export function dpUniquePaths(w: number, h: number): number {
  const dp = Array(w)
    .fill(1);

  for (let i = 1; i < h; i++) {
    dp[0] = 1;
    for (let j = 1; j < w; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[w - 1];
}
