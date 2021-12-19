// https://leetcode-cn.com/problems/number-of-provinces/
// 547
export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const cache = Array(n).fill(0);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (cache[i] === 0) {
      count++;
      dfs(i);
    }
  }

  function dfs(i: number): void {
    if (cache[i] === 1) {
      return;
    }

    cache[i] = 1;

    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        dfs(j);
      }
    }
  }

  return count;
}
