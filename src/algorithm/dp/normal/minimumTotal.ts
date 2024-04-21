// https://leetcode-cn.com/problems/triangle/
// 120
// 自顶向下
export function minimumTotal(grid: number[][], cache = new Map<string, number>(), h = 0, w = 0): number {
  const height = grid.length;
  if (h === height) {
    return 0;
  }

  const cacheKey = `${h},${w}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const result = Math.min(minimumTotal(grid, cache, h + 1, w), minimumTotal(grid, cache, h + 1, w + 1)) + grid[h][w];
  cache.set(cacheKey, result);
  return result;
}

// https://leetcode-cn.com/problems/triangle/
// 120
// 自底向上左往右
export function minimumTotalDpLeftToRight(grid: number[][]): number {
  const height = grid.length;
  const dp: number[] = Array(height).fill(null);
  for (let i = 0; i < height; i++) {
    dp[i] = grid[height - 1][i];
  }

  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j < grid[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + grid[i][j];
    }
  }

  return dp[0];
}
