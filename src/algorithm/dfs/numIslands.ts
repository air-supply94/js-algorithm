// https://leetcode-cn.com/problems/number-of-islands/
// 200
export function numIslands(grid: string[][]): number {
  const height = grid.length;
  const width = grid[0].length;
  let count = 0;
  let h: number;
  let w: number;
  const directionMatrix = [
    [
      -1,
      0,
    ],
    [
      1,
      0,
    ],
    [
      0,
      -1,
    ],
    [
      0,
      1,
    ],
  ];

  function dfs(i: number, j: number): void {
    if (grid[i][j] === null) {
      return;
    }

    grid[i][j] = null;
    for (let k = 0; k < directionMatrix.length; k++) {
      h = i + directionMatrix[k][0];
      w = j + directionMatrix[k][1];
      if (h >= 0 && h < height && w >= 0 && w < width && grid[h][w] === '1') {
        dfs(h, w);
      }
    }
    grid[i][j] = '1';
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}
