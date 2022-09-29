// 邻接表
export function hasCircle(graph: number[][]): boolean {
  const visited: number[] = Array(graph.length).fill(0);
  const path: number[] = Array(graph.length).fill(0);
  let graphHasCircle = false;

  for (let i = 0; i < graph.length; i++) {
    dfs(i);
  }

  function dfs(start: number): void {
    if (visited[start] === 1) {
      return;
    }

    if (path[start] === 1) {
      graphHasCircle = true;
      return;
    }

    visited[start] = 1;
    path[start] = 1;

    for (let i = 0; i < graph[start].length; i++) {
      dfs(graph[start][i]);
    }

    path[start] = 0;
  }

  return graphHasCircle;
}

// 邻接表
export function topologicalSortingDfs(graph: number[][]): number[] {
  const visited: number[] = Array(graph.length).fill(0);
  const connectedPath: number[] = [];

  if (hasCircle(graph)) {
    return [];
  }

  function dfs(start: number): void {
    if (visited[start] === 1) {
      return;
    }

    visited[start] = 1;

    for (let i = 0; i < graph[start].length; i++) {
      dfs(graph[start][i]);
    }

    connectedPath.push(start);
  }

  for (let i = 0; i < graph.length; i++) {
    dfs(i);
  }

  return connectedPath.reverse();
}

// 邻接表
export function topologicalSortingBfs(graph: number[][]): number[] {
  const inDegree: number[] = Array(graph.length).fill(0);
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      inDegree[graph[i][j]]++;
    }
  }

  const result: number[] = [];
  const queue: number[] = [];
  for (let i = 0; i < graph.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const currentNode = queue.shift();
    result.push(currentNode);

    for (let i = 0; i < graph[currentNode].length; i++) {
      inDegree[graph[currentNode][i]]--;
      if (inDegree[graph[currentNode][i]] === 0) {
        queue.push(graph[currentNode][i]);
      }
    }
  }

  if (result.length === graph.length) {
    return result;
  } else {
    return [];
  }
}
