// https://leetcode.cn/problems/rotting-oranges/description/?envType=study-plan-v2&envId=top-100-liked
// 994
// top100
const directionMatrix: [number, number][] = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

export function orangesRotting(grid: number[][]): number {
  let goodOrangeCount = 0;
  const queue: number[][] = [];
  const height = grid.length;
  const width = grid[0].length;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const item = grid[i][j];
      if (item === 2) {
        queue.push([i, j]);
        grid[i][j] = 0;
      } else if (item === 1) {
        goodOrangeCount++;
      }
    }
  }

  if (queue.length === 0) {
    return goodOrangeCount > 0 ? -1 : 0;
  }

  let level = 0;
  while (queue.length) {
    level++;
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const item = queue.shift();
      for (let j = 0; j < directionMatrix.length; j++) {
        const h = item[0] + directionMatrix[j][0];
        const w = item[1] + directionMatrix[j][1];
        if (h >= 0 && h < height && w >= 0 && w < width && grid[h][w] === 1) {
          goodOrangeCount--;
          queue.push([h, w]);
          grid[h][w] = 0;
        }
      }
    }
  }

  return goodOrangeCount > 0 ? -1 : level - 1;
}
