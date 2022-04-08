// https://leetcode-cn.com/problems/couples-holding-hands/
// 765
export function minSwapsCouples(row: number[]): number {
  const f: number[] = Array(row.length)
    .fill(null);
  let count = 0;

  for (let i = 0; i < row.length; i++) {
    f[i] = i - (i & 1);
  }

  function find(x: number): number {
    if (x === f[x]) {
      return x;
    } else {
      f[x] = find(f[x]);
      return f[x];
    }
  }

  function union(x: number, y: number): void {
    if (find(x) !== find(y)) {
      count++;
    }

    f[find(x)] = find(y);
  }

  for (let i = 0; i < row.length; i += 2) {
    union(row[i], row[i + 1]);
  }

  return count;
}
