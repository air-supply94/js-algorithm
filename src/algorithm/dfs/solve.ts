// https://leetcode-cn.com/problems/surrounded-regions/
// 130
export function solve(board: string[][]): void {
  const height = board.length;
  const width = board[0].length;

  function dfs(h: number, w: number): void {
    if (h < 0 || w < 0 || h >= board.length || w >= board[0].length || board[h][w] !== 'O') {
      return;
    }

    board[h][w] = null;
    dfs(h - 1, w);
    dfs(h, w + 1);
    dfs(h + 1, w);
    dfs(h, w - 1);
  }

  for (let i = 0; i < width; i++) {
    dfs(0, i);
    dfs(height - 1, i);
  }

  for (let i = 0; i < height; i++) {
    dfs(i, 0);
    dfs(i, width - 1);
  }

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      board[i][j] = board[i][j] === null ? 'O' : 'X';
    }
  }
}

