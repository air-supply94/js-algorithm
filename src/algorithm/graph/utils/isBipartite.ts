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

  function dfs(startNode: number): void {
    if (!result) {
      return;
    }

    visited[startNode] = 1;
    const neighborNodes = graph[startNode];
    for (let i = 0; i < neighborNodes.length; i++) {
      const neighbor = neighborNodes[i];
      if (visited[neighbor] === 0) {
        color[neighbor] = -color[startNode];
        dfs(neighbor);
      } else {
        if (color[neighbor] === color[startNode]) {
          result = false;
        }
      }
    }
  }

  /*  function bfs(start: number): void {
    const queue = [start];
    visited[start] = 1;

    while (queue.length > 0 && result) {
      const currentNode = queue.shift();
      const neighbor = graph[currentNode];

      for (let i = 0; i < neighbor.length; i++) {
        const nextNode = neighbor[i];
        if (visited[nextNode] === 0) {
          visited[nextNode] = 1;
          color[nextNode] = -color[currentNode];
          queue.push(nextNode);
        } else if (color[currentNode] === color[nextNode]) {
          result = false;
        }
      }
    }
  }*/

  return result;
}
