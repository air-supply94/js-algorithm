// https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
// 1091
export function shortestPathBinaryMatrix(grid: number[][]): number {
  const height = grid.length;
  const width = grid[0].length;
  const directionMatrix: [number, number][] = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const queue: [number, number][] = [];

  const visited: number[][] = Array(height)
    .fill(null)
    .map(() => Array(width).fill(0));
  if (grid[0][0] === 0) {
    visited[0][0] = 1;
    queue.push([0, 0]);
  }

  let level = 0;
  while (queue.length > 0) {
    level++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const currentNode = queue.shift();

      if (currentNode[0] === width - 1 && currentNode[1] === height - 1) {
        return level;
      }

      for (let j = 0; j < directionMatrix.length; j++) {
        const h = currentNode[0] + directionMatrix[j][0];
        const w = currentNode[1] + directionMatrix[j][1];
        if (h >= 0 && h < height && w >= 0 && w < width && grid[h][w] === 0 && visited[h][w] === 0) {
          visited[h][w] = 1;
          queue.push([h, w]);
        }
      }
    }
  }

  return -1;
}
