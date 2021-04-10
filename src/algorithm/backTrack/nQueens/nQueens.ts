export function nQueens(n: number): number {
  const cols = new Map<number, boolean>();
  const addVector = new Map<number, boolean>();
  const subtractVector = new Map<number, boolean>();
  let result = 0;

  function isValid(row: number, col: number) {
    if (!cols.has(col)) {
      if (!addVector.has(row + col)) {
        if (!subtractVector.has(row - col)) {
          return true;
        }
      }
    }
    return false;
  }

  function recursion(row: number, path: number[]): void {
    if (row === n) {
      result++;
      return;
    }

    for (let col = 0; col < n; ++col) {
      if (isValid(row, col)) {
        cols.set(col, true);
        addVector.set(row + col, true);
        subtractVector.set(row - col, true);
        recursion(row + 1, path.concat(col));
        cols.delete(col);
        addVector.delete(row + col);
        subtractVector.delete(row - col);
      }
    }
  }

  recursion(0, []);
  return result;
}
