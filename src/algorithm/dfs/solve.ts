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

  for (let w = 0; w < width; w++) {
    dfs(0, w);
    dfs(height - 1, w);
  }

  for (let h = 0; h < height; h++) {
    dfs(h, 0);
    dfs(h, width - 1);
  }

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      board[h][w] = board[h][w] === null ? 'O' : 'X';
    }
  }
}
