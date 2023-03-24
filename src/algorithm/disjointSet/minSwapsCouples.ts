// https://leetcode-cn.com/problems/couples-holding-hands/
// 765
export function minSwapsCouples(row: number[]): number {
  const parent: number[] = Array(row.length).fill(null);
  const n = row.length / 2;
  let connectCount = n;

  for (let i = 0; i < row.length; i++) {
    parent[i] = i - (i & 1);
  }

  function find(x: number): number {
    if (x === parent[x]) {
      return x;
    } else {
      parent[x] = find(parent[x]);
      return parent[x];
    }
  }

  function union(x: number, y: number): void {
    const parentX = find(x);
    const parentY = find(y);
    if (parentX !== parentY) {
      connectCount--;
    }

    parent[parentX] = parentY;
  }

  for (let i = 0; i < row.length; i += 2) {
    union(row[i], row[i + 1]);
  }

  return n - connectCount;
}
