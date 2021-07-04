// https://leetcode-cn.com/problems/word-search/
// 79
export function exist(board: string[][], word: string): boolean {
  for (let h = 0; h < board.length; h++) {
    for (let w = 0; w < board[h].length; w++) {
      if (wordSearch(board, word, h, w, 0, board.length, board[h].length)) {
        return true;
      }
    }
  }

  return false;
}

function wordSearch(board: string[][], word: string, h: number, w: number, k: number, height: number, width: number): boolean {
  if (h < 0 || w < 0 || h >= height || w >= width || board[h][w] !== word[k]) {
    return false;
  }

  if (k === word.length - 1) {
    return true;
  }

  const tempChar = board[h][w];
  board[h][w] = '  ';
  const result = (
    wordSearch(board, word, h - 1, w, k + 1, height, width) ||
    wordSearch(board, word, h, w + 1, k + 1, height, width) ||
    wordSearch(board, word, h + 1, w, k + 1, height, width) ||
    wordSearch(board, word, h, w - 1, k + 1, height, width)
  );
  board[h][w] = tempChar;
  return result;
}
