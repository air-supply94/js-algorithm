// https://leetcode-cn.com/problems/number-of-islands/
// 200
export function numIslands(grid: string[][]): number {
  const height = grid.length;
  const width = grid[0].length;
  let connectCount = 0;

  function dfs(i: number, j: number): void {
    if (i < 0 || i >= height || j < 0 || j >= width) {
      return;
    }

    if (grid[i][j] === '0') {
      return;
    }

    grid[i][j] = '0';
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '1') {
        connectCount++;
        dfs(i, j);
      }
    }
  }

  return connectCount;
}
