// https://leetcode.cn/problems/count-sub-islands/
// 1905
export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const m = grid1.length;
  const n = grid1[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid1[i][j] == 0 && grid2[i][j] == 1) {
        dfs(grid2, i, j);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] == 1) {
        res++;
        dfs(grid2, i, j);
      }
    }
  }
  return res;
}

function dfs(grid: number[][], i: number, j: number): void {
  const height = grid.length;
  const width = grid[0].length;

  if (i < 0 || j < 0 || i >= height || j >= width) {
    return;
  }

  if (grid[i][j] == 0) {
    return;
  }

  grid[i][j] = 0;
  dfs(grid, i + 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i - 1, j);
  dfs(grid, i, j - 1);
}
