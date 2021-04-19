export function nQueens(n: number): number {
  const cols = new Map<number, boolean>();
  const addVector = new Map<number, boolean>();
  const subtractVector = new Map<number, boolean>();
  let result = 0;

  function isValid(h: number, w: number) {
    return !cols.has(w) && !addVector.has(h + w) && !subtractVector.has(h - w);
  }

  function recursion(h: number, path: number[]): void {
    if (h === n) {
      result++;
      return;
    }

    for (let i = 0; i < n; i++) {
      if (isValid(h, i)) {
        path.push(i);
        cols.set(i, true);
        addVector.set(h + i, true);
        subtractVector.set(h - i, true);

        recursion(h + 1, path.concat(i));

        path.pop();
        cols.delete(i);
        addVector.delete(h + i);
        subtractVector.delete(h - i);
      }
    }
  }

  recursion(0, []);
  return result;
}
