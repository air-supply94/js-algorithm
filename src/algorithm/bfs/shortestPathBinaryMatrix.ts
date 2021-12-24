// https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
// 1091
// graph
// 改遍了原始数据
export function shortestPathBinaryMatrix(grid: number[][]): number {
  const height = grid.length;
  const width = grid[0].length;
  let h: number;
  let w: number;
  const directionMatrix = [
    [
      -1,
      -1,
    ],
    [
      -1,
      0,
    ],
    [
      -1,
      1,
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
      -1,
    ],
    [
      1,
      0,
    ],
    [
      1,
      1,
    ],
  ];
  const queue: Array<[number, number, number]> = [];

  if (grid[0][0] === 0) {
    grid[0][0] = null;
    queue.push([
      0,
      0,
      1,
    ]);
  }

  while (queue.length) {
    const currentNode = queue.shift();

    if (currentNode[0] === width - 1 && currentNode[1] === height - 1) {
      return currentNode[2];
    }

    for (let k = 0; k < directionMatrix.length; k++) {
      h = currentNode[0] + directionMatrix[k][0];
      w = currentNode[1] + directionMatrix[k][1];
      if (h >= 0 && h < height && w >= 0 && w < width && grid[h][w] === 0) {
        grid[h][w] = null;
        queue.push([
          h,
          w,
          currentNode[2] + 1,
        ]);
      }
    }
  }

  return -1;
}
