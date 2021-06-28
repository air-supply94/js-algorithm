export function minFallingPathSum(matrix: number[][]): number {
  if (!matrix.length) {
    return 0;
  }

  const n = matrix.length;
  if (n === 1) {
    return matrix[0][0];
  }

  const dp = Array(n)
    .fill(null)
    .map(() => Array(n)
      .fill(0));

  for (let i = 0; i < n; i++) {
    dp[0][i] = matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1]) + matrix[i][0];
    for (let j = 1; j < n - 1; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]) + matrix[i][j];
    }
    dp[i][n - 1] = Math.min(dp[i - 1][n - 1], dp[i - 1][n - 2]) + matrix[i][n - 1];
  }

  return Math.min.apply(null, dp[n - 1]);
}
