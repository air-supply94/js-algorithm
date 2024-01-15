// https://leetcode-cn.com/problems/minimum-falling-path-sum/
// 931
export function minFallingPathSum(matrix: number[][]): number {
  const n = matrix.length;
  const dp = Array(n + 2).fill(Infinity);
  for (let i = 0; i < n; i++) {
    dp[i + 1] = matrix[0][i];
  }

  for (let i = 1; i < n; i++) {
    let nextPre = dp[0];
    dp[0] = Infinity;
    for (let j = 1; j <= n; j++) {
      const pre = nextPre;
      nextPre = dp[j];
      dp[j] = Math.min(pre, dp[j], dp[j + 1]) + matrix[i][j - 1];
    }
  }

  return Math.min.apply(null, dp);
}
