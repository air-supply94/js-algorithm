// 邻接表
// https://leetcode-cn.com/problems/is-graph-bipartite/
// 785
export function isBipartite(graph: number[][]): boolean {
  const n = graph.length;
  const visited: number[] = Array(n).fill(0);
  const color: number[] = Array(n).fill(1);
  let result = true;

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }

  function dfs(start: number): void {
    if (result === false) {
      return;
    }

    visited[start] = 1;
    const neighbor = graph[start];

    for (let i = 0; i < neighbor.length; i++) {
      if (visited[neighbor[i]] === 0) {
        color[neighbor[i]] = -color[start];
        dfs(neighbor[i]);
      } else {
        if (color[neighbor[i]] === color[start]) {
          result = false;
        }
      }
    }
  }

  return result;
}
