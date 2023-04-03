// https://leetcode-cn.com/problems/triangle/
// 120
// 自顶向下
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

// https://leetcode-cn.com/problems/triangle/
// 120
// 自底向上左往右
export function minimumTotalDpLeftToRight(grid: number[][]): number {
  const height = grid.length;
  const dp = Array(height).fill(null);
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

// https://leetcode-cn.com/problems/triangle/
// 120
// 自底向上右往左
export function minimumTotalDpRightToLeft(grid: number[][]): number {
  const height = grid.length;
  const dp = Array(height).fill(null);
  for (let i = 0; i < height; i++) {
    dp[i] = grid[height - 1][i];
  }

  for (let i = height - 2; i >= 0; i--) {
    const shiftLength = height - grid[i].length;
    for (let j = height - 1; j >= shiftLength; j--) {
      dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j - shiftLength];
    }
  }

  return dp[height - 1];
}

