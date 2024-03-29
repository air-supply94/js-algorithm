// 邻接表
export function hasCircleDfs(graph: number[][]): boolean {
  const n = graph.length;
  const visited: number[] = Array(n).fill(0);
  const path: number[] = Array(n).fill(0);
  let graphHasCircle = false;

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }

  function dfs(i: number): void {
    if (path[i] === 1) {
      graphHasCircle = true;
    }

    if (visited[i] === 1 || graphHasCircle) {
      return;
    }

    visited[i] = 1;
    path[i] = 1;
    for (let j = 0; j < graph[i].length; j++) {
      dfs(graph[i][j]);
    }
    path[i] = 0;
  }

  return graphHasCircle;
}

// 邻接表
export function topologicalSortingDfs(graph: number[][]): number[] {
  const n = graph.length;
  const visited: number[] = Array(n).fill(0);
  const connectedPath: number[] = [];

  if (hasCircleDfs(graph)) {
    return [];
  }

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      dfs(i);
    }
  }

  function dfs(i: number): void {
    if (visited[i] === 1) {
      return;
    }

    visited[i] = 1;

    for (let j = 0; j < graph[i].length; j++) {
      dfs(graph[i][j]);
    }

    connectedPath.push(i);
  }

  return connectedPath.reverse();
}

// 邻接表
export function topologicalSortingBfs(graph: number[][]): number[] {
  const n = graph.length;
  const inDegree: number[] = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      inDegree[graph[i][j]]++;
    }
  }

  const result: number[] = [];
  const queue: number[] = [];
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode);

    for (let i = 0; i < graph[currentNode].length; i++) {
      const neighborNode = graph[currentNode][i];
      inDegree[neighborNode]--;
      if (inDegree[neighborNode] === 0) {
        queue.push(neighborNode);
      }
    }
  }

  return result.length === n ? result : [];
}
