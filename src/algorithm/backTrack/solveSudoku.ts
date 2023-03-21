// https://leetcode-cn.com/problems/sudoku-solver/
// 37
export function solveSudoku(board: string[][], h = 0, w = 0, n = 9): boolean {
  if (h === n) {
    return true;
  }

  if (w === n) {
    return solveSudoku(board, h + 1, 0, n);
  }

  if (board[h][w] !== '.') {
    return solveSudoku(board, h, w + 1, n);
  }

  for (let i = 1; i <= n; i++) {
    if (isValid(board, h, w, `${i}`, n)) {
      board[h][w] = `${i}`;
      if (solveSudoku(board, h, w + 1, n)) {
        return true;
      }
      board[h][w] = '.';
    }
  }

  return false;
}

function isValid(board: string[][], h: number, w: number, ch: string, n: number): boolean {
  const itemHeight = Math.pow(n, 0.5);
  const startHeight = h - h % itemHeight;
  const startWidth = w - w % itemHeight;

  for (let i = 0; i < n; i++) {
    if (board[h][i] == ch) {
      return false;
    }

    if (board[i][w] === ch) {
      return false;
    }

    if (board[startHeight + (i / itemHeight) | 0][startWidth + i % itemHeight] === ch) {
      return false;
    }
  }

  return true;
}
