export function minPathSum(matrix: number[][]): number {
  const height = matrix.length;
  const width = matrix[0].length;
  const dp = Array(height)
    .fill(null)
    .map(() => Array(width)
      .fill(0));

  dp[0][0] = matrix[0][0];

  for (let i = 1; i < height; i++) {
    dp[i][0] = dp[i - 1][0] + matrix[i][0];
  }

  for (let i = 1; i < width; i++) {
    dp[0][i] = dp[0][i - 1] + matrix[0][i];
  }

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j];
    }
  }

  return dp[height - 1][width - 1];
}
