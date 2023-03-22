// https://leetcode-cn.com/problems/number-of-provinces/
// 547
export function findCircleNum(isConnected: number[][]): number {
  const n = isConnected.length;
  const visited = Array(n).fill(0);
  let connectCount = 0;

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      connectCount++;
      dfs(i);
    }
  }

  function dfs(i: number): void {
    if (visited[i] === 1) {
      return;
    }

    visited[i] = 1;

    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] === 1) {
        dfs(j);
      }
    }
  }

  return connectCount;
}
