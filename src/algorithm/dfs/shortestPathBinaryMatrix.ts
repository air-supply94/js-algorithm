// https://leetcode-cn.com/problems/shortest-path-in-binary-matrix/
// 1091
// graph
// dfs无法全部通过,只用来练习dfs
// 用bfs可以轻松解决,参考bfs下shortestPathBinaryMatrix
export function shortestPathBinaryMatrix(grid: number[][]): number {
  const height = grid.length;
  const width = grid[0].length;
  let count = Infinity;
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

  function dfs(i: number, j: number, path: number): void {
    if (grid[i][j] !== 0) {
      return;
    }

    if (i === width - 1 && j === height - 1) {
      count = Math.min(count, path + 1);
      return;
    }

    grid[i][j] = null;
    for (let k = 0; k < directionMatrix.length; k++) {
      h = i + directionMatrix[k][0];
      w = j + directionMatrix[k][1];
      if (h >= 0 && h < height && w >= 0 && w < width) {
        dfs(h, w, path + 1);
      }
    }
    grid[i][j] = 0;
  }

  dfs(0, 0, 0);

  return count === Infinity ? -1 : count;
}
