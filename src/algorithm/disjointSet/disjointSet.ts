/*
export function disjointSet(n: number): void {
  const parent: number[] = Array(n)
    .fill(null);
  const count = Array(n)
    .fill(1);
  let connectCount = n;

  for (let i = 0; i < n; i++) {
    parent[i] = i;
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
      parent[parentX] = parentY;
      count[parentY] += count[parentX];
    }
  }
}
*/
