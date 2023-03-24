// https://leetcode-cn.com/problems/number-of-islands/
// 200
export function numIslands(grid: string[][]): number {
  const height = grid.length;
  const width = grid[0].length;

  const parent: number[] = Array(width * height).fill(null);
  let connectCount = parent.length;
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }

  function find(x: number): number {
    if (parent[x] === x) {
      return x;
    } else {
      parent[x] = find(parent[x]);
      return parent[x];
    }
  }

  function union(x: number, y: number): void {
    const parentX = find(x);
    const parentY = find(y);
    if (parentX !== parentY) {
      connectCount--;
    }

    parent[parentX] = parentY;
  }

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

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === '1') {
        for (let k = 0; k < directionMatrix.length; k++) {
          const h = i + directionMatrix[k][0];
          const w = j + directionMatrix[k][1];
          if (h >= 0 && h < height && w >= 0 && w < width && grid[h][w] === '1') {
            union(i * width + j, h * width + w);
          }
        }
      } else {
        connectCount--;
      }
    }
  }

  return connectCount;
}
