// https://leetcode-cn.com/problems/maximal-square/
// 221
export function maximalSquare(matrix: string[][]): number {
  const height = matrix.length;
  const width = matrix[0].length;

  const dp = Array(width + 1)
    .fill(0);
  let max = 0;

  for (let h = 1; h <= height; h++) {
    let tmp = dp[0];
    dp[0] = 0;
    for (let w = 1; w <= width; w++) {
      const pre = tmp;
      tmp = dp[w];
      if (matrix[h - 1][w - 1] === '0') {
        dp[w] = 0;
      } else {
        dp[w] = Math.min(pre, dp[w - 1], dp[w]) + 1;
        max = Math.max(max, dp[w]);
      }
    }
  }

  return max * max;
}
