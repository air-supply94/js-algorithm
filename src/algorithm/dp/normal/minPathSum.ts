// https://leetcode-cn.com/problems/minimum-path-sum/
// 64
export function minPathSum(matrix: number[][]): number {
  const height = matrix.length;
  const width = matrix[0].length;
  const dp = Array(width + 1).fill(Infinity);

  // 第一个元素初始化
  dp[1] = 0;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      dp[j + 1] = Math.min(dp[j], dp[j + 1]) + matrix[i][j];
    }
  }

  return dp[width];
}
