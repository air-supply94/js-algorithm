// https://leetcode-cn.com/problems/surrounded-regions/
// 130
function solve(board: string[][]): void {
  const n = board.length;
  const m = board[0].length;

  for (let i = 0; i < m; i++) {
    dfs(board, 0, i);
    dfs(board, n - 1, i);
  }

  for (let i = 1; i < n - 1; i++) {
    dfs(board, i, 0);
    dfs(board, i, m - 1);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      board[i][j] = board[i][j] === null ? 'O' : 'X';
    }
  }
}

function dfs(board: string[][], h: number, w: number): void {
  if (h < 0 || w < 0 || h >= board.length || w >= board[0].length || board[h][w] !== 'O') {
    return;
  }

  board[h][w] = null;
  dfs(board, h - 1, w);
  dfs(board, h, w + 1);
  dfs(board, h + 1, w);
  dfs(board, h, w - 1);
}
