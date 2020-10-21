function convertCurrentToBoard(array: number[], n: number): string[] {
  return array.map((num) => Array(n)
    .fill(null)
    .map((_, index) => (index !== num ? '.' : 'Q'))
    .join(''));
}

export function nQueens(n: number): string[][] {
  const result: string[][] = [];
  const cols = new Set<number>();
  const diagonals1 = new Set<number>();
  const diagonals2 = new Set<number>();

  function recursion(row: number, current: number[]): void {
    if (row === n) {
      result.push(convertCurrentToBoard(current, n));
      return;
    }

    for (let col = 0; col < n; ++col) {
      if (!cols.has(col) && !diagonals1.has(row + col) && !diagonals2.has(row - col)) {
        cols.add(col);
        diagonals1.add(row + col);
        diagonals2.add(row - col);
        recursion(row + 1, current.concat(col));
        cols.delete(col);
        diagonals1.delete(row + col);
        diagonals2.delete(row - col);
      }
    }
  }

  recursion(0, []);
  return result;
}
