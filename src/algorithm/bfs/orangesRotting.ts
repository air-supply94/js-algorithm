// https://leetcode.cn/problems/rotting-oranges/description/?envType=study-plan-v2&envId=top-100-liked
// 994
// top100
export function orangesRotting(grid: number[][]): number {
  const height = grid.length;
  const width = grid[0].length;
  const queue: number[][] = [];
  let level = 0;
  let goodOrangesCount = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid[i][j] === 2) {
        queue.push([
          i,
          j,
        ]);
        grid[i][j] = 0;
      } else if (grid[i][j] === 1) {
        goodOrangesCount++;
      }
    }
  }

  if (queue.length === 0) {
    return goodOrangesCount > 0 ? -1 : 0;
  }

  const directionMatrix: Array<[number, number]> = [
    [
      -1,
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
    [
      1,
      0,
    ],
  ];

  while (queue.length > 0 && goodOrangesCount > 0) {
    level++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();
      for (let j = 0; j < directionMatrix.length; j++) {
        const h = currentNode[0] + directionMatrix[j][0];
        const w = currentNode[1] + directionMatrix[j][1];
        if (h >= 0 && h < height && w >= 0 && w < width && grid[h][w] === 1) {
          goodOrangesCount--;
          grid[h][w] = 0;
          queue.push([
            h,
            w,
          ]);
        }
      }
    }
  }

  return goodOrangesCount > 0 ? -1 : level;
}
