// https://leetcode.cn/problems/count-sub-islands/
// 1905
export function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const height = grid1.length;
  const width = grid1[0].length;

  function dfs(h: number, w: number): void {
    if (h < 0 || w < 0 || h >= height || w >= width || grid2[h][w] === 0) {
      return;
    }

    grid2[h][w] = 0;
    dfs(h - 1, w);
    dfs(h, w + 1);
    dfs(h + 1, w);
    dfs(h, w - 1);
  }

  // 0-0和1-1不处理
  // 0-1则grid2不可能是grid1对应的子岛屿---对应连接的1处理成0
  // 1-0不处理
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      if (grid1[h][w] == 0 && grid2[h][w] == 1) {
        dfs(h, w);
      }
    }
  }

  let res = 0;
  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      if (grid2[h][w] == 1) {
        res++;
        dfs(h, w);
      }
    }
  }
  return res;
}

