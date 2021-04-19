export function uniquePaths(width: number, height: number): number {
  const dp = Array(width)
    .fill(1);

  for (let h = 1; h < height; h++) {
    dp[0] = 1;
    for (let w = 1; w < width; w++) {
      dp[w] += dp[w - 1];
    }
  }

  return dp[width - 1];
}
