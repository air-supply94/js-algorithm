// https://leetcode-cn.com/problems/minimum-path-sum/
// 64
export function minPathSum(matrix: number[][]): number {
  const height = matrix.length;
  const width = matrix[0].length;
  const dp = Array(width).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < height; i++) {
    dp[0] += matrix[i][0];
    for (let j = 1; j < width; j++) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + matrix[i][j];
    }
  }

  return dp[width - 1];
}
