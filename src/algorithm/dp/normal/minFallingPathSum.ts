// https://leetcode-cn.com/problems/minimum-falling-path-sum/
// 931
export function minFallingPathSum(matrix: number[][]): number {
  if (matrix.length === 0) {
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

  const directionVector = [
    [
      -1,
      -1,
    ],
    [
      -1,
      0,
    ],
    [
      -1,
      1,
    ],
  ];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let minValue = Infinity;
      for (let k = 0; k < directionVector.length; k++) {
        const x = i + directionVector[k][0];
        const y = j + directionVector[k][1];
        if (x >= 0 && x < n && y >= 0 && y < n) {
          minValue = Math.min(minValue, dp[x][y]);
        }
      }
      dp[i][j] = minValue + matrix[i][j];
    }
  }

  return Math.min.apply(null, dp[n - 1]);
}
