export function minPathSum(matrix: number[][]): number {
  const height = matrix.length;
  const width = matrix[0].length;
  const dp = Array(width)
    .fill(null);
  dp[0] = matrix[0][0];

  for (let i = 1; i < width; i++) {
    dp[i] = dp[i - 1] + matrix[0][i];
  }

  for (let i = 1; i < height; i++) {
    dp[0] += matrix[i][0];
    for (let j = 1; j < width; j++) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + matrix[i][j];
    }
  }

  return dp[width - 1];
}
