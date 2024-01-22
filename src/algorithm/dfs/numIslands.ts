// https://leetcode-cn.com/problems/number-of-islands/
// 200
export function numIslands(grid: string[][]): number {
  const height = grid.length;
  const width = grid[0].length;
  let connectCount = 0;

  function dfs(h: number, w: number) {
    if (h < 0 || h >= height || w < 0 || w >= width || grid[h][w] !== '1') {
      return;
    }

    grid[h][w] = null;
    dfs(h - 1, w);
    dfs(h, w + 1);
    dfs(h + 1, w);
    dfs(h, w - 1);
  }

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      if (grid[h][w] === '1') {
        connectCount++;
        dfs(h, w);
      }
    }
  }

  return connectCount;
}
