// https://leetcode-cn.com/problems/word-search/
// 79
// top100
// 剑指offer 12
export function exist(board: string[][], word: string): boolean {
  for (let h = 0; h < board.length; h++) {
    for (let w = 0; w < board[h].length; w++) {
      if (dfs(board, word, h, w, 0)) {
        return true;
      }
    }
  }

  return false;
}

function dfs(board: string[][], word: string, h: number, w: number, k: number): boolean {
  const height = board.length;
  const width = height > 0 ? board[0].length : 0;
  if (h < 0 || w < 0 || h >= height || w >= width || board[h][w] !== word[k]) {
    return false;
  }

  if (k === word.length - 1) {
    return true;
  }

  const tempChar = board[h][w];
  board[h][w] = null;
  const result = (
    dfs(board, word, h - 1, w, k + 1) ||
    dfs(board, word, h, w + 1, k + 1) ||
    dfs(board, word, h + 1, w, k + 1) ||
    dfs(board, word, h, w - 1, k + 1)
  );
  board[h][w] = tempChar;
  return result;
}
