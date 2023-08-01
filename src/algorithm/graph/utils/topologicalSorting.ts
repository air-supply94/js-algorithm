// 邻接表
export function hasCircleDfs(graph: number[][]): boolean {
  const visited: number[] = Array(graph.length)
    .fill(0);
  const path: number[] = Array(graph.length)
    .fill(0);
  let graphHasCircle = false;

  for (let i = 0; i < graph.length; i++) {
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
export function hasCircleBfs(graph: number[][]): boolean {
  const inDegree: number[] = Array(graph.length)
    .fill(0);
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      inDegree[graph[i][j]]++;
    }
  }

  let visitedCount = 0;
  const queue: number[] = [];
  for (let i = 0; i < graph.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visitedCount++;

    for (let i = 0; i < graph[currentNode].length; i++) {
      inDegree[graph[currentNode][i]]--;
      if (inDegree[graph[currentNode][i]] === 0) {
        queue.push(graph[currentNode][i]);
      }
    }
  }

  return visitedCount !== graph.length;
}

// 邻接表
export function topologicalSortingDfs(graph: number[][]): number[] {
  const visited: number[] = Array(graph.length)
    .fill(0);
  const connectedPath: number[] = [];

  if (hasCircleDfs(graph)) {
    return [];
  }

  for (let i = 0; i < graph.length; i++) {
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
  const inDegree: number[] = Array(graph.length)
    .fill(0);
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
