// https://leetcode-cn.com/problems/triangle/
// 120
export function minimumTotal(grid: number[][]): number {
  const height = grid.length;
  const cache = Array(height)
    .fill(null)
    .map(() => Array(height)
      .fill(null));

  function dfs(i: number, j: number): number {
    if (i === height) {
      return 0;
    }

    if (cache[i][j] !== null) {
      return cache[i][j];
    }

    cache[i][j] = Math.min(dfs(i + 1, j), dfs(i + 1, j + 1)) + grid[i][j];
    return cache[i][j];
  }

  return dfs(0, 0);
}
