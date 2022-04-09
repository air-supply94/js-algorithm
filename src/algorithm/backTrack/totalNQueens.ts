// https://leetcode-cn.com/problems/n-queens-ii/
// 52
export function totalNQueens(n: number): number {
  const cols = new Set<number>();
  const addVector = new Set<number>();
  const subtractVector = new Set<number>();
  let result = 0;

  function isValid(h: number, w: number): boolean {
    return !cols.has(w) && !addVector.has(h + w) && !subtractVector.has(h - w);
  }

  function dfs(h: number): void {
    if (h === n) {
      result++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isValid(h, i)) {
        cols.add(i);
        addVector.add(h + i);
        subtractVector.add(h - i);

        dfs(h + 1);

        cols.delete(i);
        addVector.delete(h + i);
        subtractVector.delete(h - i);
      }
    }
  }

  dfs(0);
  return result;
}
