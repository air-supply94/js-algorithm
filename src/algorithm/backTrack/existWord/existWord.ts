export function existWord(board: string[][], word: string): boolean {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (wordSearch(board, word, row, col, 0, board.length, board[row].length)) {
        return true;
      }
    }
  }

  return false;
}

function wordSearch(board: string[][], word: string, row: number, col: number, k: number, height: number, width: number): boolean {
  if (row < 0 || col < 0 || row >= height || col >= width || board[row][col] !== word[k]) {
    return false;
  }

  if (k === word.length - 1) {
    return true;
  }

  const tempChar = board[row][col];
  board[row][col] = '  ';
  const result = (
    wordSearch(board, word, row - 1, col, k + 1, height, width) ||
    wordSearch(board, word, row, col + 1, k + 1, height, width) ||
    wordSearch(board, word, row + 1, col, k + 1, height, width) ||
    wordSearch(board, word, row, col - 1, k + 1, height, width)
  );
  board[row][col] = tempChar;
  return result;
}
