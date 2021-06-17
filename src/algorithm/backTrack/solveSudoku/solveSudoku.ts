export function solveSudoku(board: string[][]): void {
  recursion(board, 0, 0);
}

function recursion(board: string[][], h: number, w: number): boolean {
  const n = 9;

  if (w === n) {
    return recursion(board, h + 1, 0);
  }

  if (h === n) {
    return true;
  }

  if (board[h][w] !== '.') {
    return recursion(board, h, w + 1);
  }

  for (let i = 1; i <= n; i++) {
    if (isValid(board, h, w, `${i}`)) {
      board[h][w] = `${i}`;
      if (recursion(board, h, w + 1)) {
        return true;
      }
      board[h][w] = '.';
    }
  }

  return false;
}

function isValid(board: string[][], h: number, w: number, ch: string): boolean {
  for (let i = 0; i < 9; i++) {
    if (board[h][i] == ch) {
      return false;
    }

    if (board[i][w] === ch) {
      return false;
    }

    if (board[Math.floor(h / 3) * 3 + Math.floor(i / 3)][Math.floor(w / 3) * 3 + i % 3] === ch) {
      return false;
    }
  }

  return true;
}
