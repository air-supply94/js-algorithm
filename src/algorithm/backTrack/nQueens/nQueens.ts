export function nQueens(n: number): number {
  const cols = new Set<number>();
  const addVector = new Set<number>();
  const subtractVector = new Set<number>();
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
        cols.add(col);
        addVector.add(row + col);
        subtractVector.add(row - col);
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
