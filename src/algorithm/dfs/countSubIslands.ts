// https://leetcode.cn/problems/count-sub-islands/
// 1905
export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const height = grid1.length;
  const width = grid1[0].length;

  function dfs(i: number, j: number): void {
    if (i < 0 || j < 0 || i >= height || j >= width || grid2[i][j] == 0) {
      return;
    }

    grid2[i][j] = 0;
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i + 1, j);
    dfs(i, j - 1);
  }

  // 0-0和1-1不处理
  // 0-1则grid2不可能是grid1对应的子岛屿---对应连接的1处理成0
  // 1-0不处理
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid1[i][j] == 0 && grid2[i][j] == 1) {
        dfs(i, j);
      }
    }
  }

  let res = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (grid2[i][j] == 1) {
        res++;
        dfs(i, j);
      }
    }
  }
  return res;
}

