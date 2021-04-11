export function uniquePaths(width: number, height: number): number {
  const dp = Array(width)
    .fill(1);

  for (let i = 1; i < height; i++) {
    dp[0] = 1;
    for (let j = 1; j < width; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[width - 1];
}
