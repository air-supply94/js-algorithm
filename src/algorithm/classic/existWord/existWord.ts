export function existWord(board: string[][], word: string): boolean {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (wordSearch(board, word, i, j, 0, board.length, board[i].length)) {
        return true;
      }
    }
  }

  return false;
}

function wordSearch(board: string[][], word: string, i: number, j: number, k: number, row: number, col: number): boolean {
  if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== word[k]) {
    return false;
  }

  if (k === word.length - 1) {
    return true;
  }

  const tempChar = board[i][j];
  board[i][j] = '  ';
  const result = (
    wordSearch(board, word, i - 1, j, k + 1, row, col) ||
    wordSearch(board, word, i, j + 1, k + 1, row, col) ||
    wordSearch(board, word, i + 1, j, k + 1, row, col) ||
    wordSearch(board, word, i, j - 1, k + 1, row, col)
  );
  board[i][j] = tempChar;
  return result;
}
