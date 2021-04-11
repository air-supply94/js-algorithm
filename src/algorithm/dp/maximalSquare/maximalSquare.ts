export function maximalSquare(matrix: number[][]): number {
  const h = matrix.length;
  const w = matrix[0].length;

  const dp = Array(w + 1)
    .fill(0);
  let max = 0;

  for (let i = 1; i < h + 1; i++) {
    let tmp = dp[0];
    dp[0] = 0;
    for (let j = 1; j < w + 1; j++) {
      const pre = tmp;
      tmp = dp[j];
      if (matrix[i - 1][j - 1]) {
        dp[j] = Math.min(pre, dp[j - 1], dp[j]) + 1;
        max = Math.max(max, dp[j]);
      } else {
        dp[j] = 0;
      }
    }
  }

  return max * max;
}
