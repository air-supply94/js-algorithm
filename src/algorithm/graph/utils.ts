// 邻接表
export function hasCircle(graph: number[][]): boolean {
  const visitedCache: number[] = Array(graph.length).fill(0);
  const pathTmp: number[] = Array(graph.length).fill(0);
  let graphHasCircle = false;

  for (let i = 0; i < graph.length; i++) {
    dfs(graph, i, visitedCache, pathTmp);
  }

  function dfs(graph: number[][], start: number, visited: number[], path: number[]): void {
    if (path[start] === 1) {
      graphHasCircle = true;
    }

    if (visited[start] === 1 || graphHasCircle) {
      return;
    }

    path[start] = 1;
    visited[start] = 1;

    for (let i = 0; i < graph[start].length; i++) {
      dfs(graph, graph[start][i], visited, path);
    }

    path[start] = 0;
  }

  return graphHasCircle;
}

// 邻接表
export function topologicalSortingDfs(graph: number[][]): number[] {
  const visitedCache: number[] = Array(graph.length).fill(0);
  const pathTmp: number[] = [];

  if (hasCircle(graph)) {
    return [];
  }

  function dfs(graph: number[][], start: number, visited: number[], path: number[]): void {
    if (visited[start] === 1) {
      return;
    }

    visited[start] = 1;

    for (let i = 0; i < graph[start].length; i++) {
      dfs(graph, graph[start][i], visited, path);
    }

    path.push(start);
  }

  for (let i = 0; i < graph.length; i++) {
    dfs(graph, i, visitedCache, pathTmp);
  }

  return pathTmp.reverse();
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

  while (queue.length) {
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

// 邻接矩阵
export function prim(graph: number[][]): number {
  const n = graph.length;
  const lowCost: number[] = Array(n).fill(Infinity);
  lowCost[0] = -1;
  for (let i = 1; i < n; i++) {
    lowCost[i] = graph[0][i];
  }
  let sum = 0;

  for (let i = 1; i < n; i++) {
    let minValue = Infinity;
    let minIndex = 0;

    for (let j = 1; j < n; j++) {
      if (lowCost[j] !== -1 && lowCost[j] < minValue) {
        minValue = lowCost[j];
        minIndex = j;
      }
    }

    sum += minValue;
    lowCost[minIndex] = -1;

    for (let j = 1; j < n; j++) {
      if (lowCost[j] !== -1 && graph[minIndex][j] < lowCost[j]) {
        lowCost[j] = graph[minIndex][j];
      }
    }
  }

  return sum;
}

// 邻接表
export function kruskal(graph: Array<Array<[number, number]>>): number {
  const n = graph.length;
  const edges: Array<[number, number, number]> = [];
  for (let i = 0; i < n; i++) {
    const neighbor = graph[i];
    for (let j = 0; j < neighbor.length; j++) {
      edges.push([
        i,
        neighbor[j][0],
        neighbor[j][1],
      ]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  const f = Array(edges.length)
    .fill(null);
  let count = n;
  let result = 0;
  for (let i = 0; i < f.length; i++) {
    f[i] = i;
  }

  function find(x: number): number {
    if (f[x] === x) {
      return x;
    } else {
      f[x] = find(f[x]);
      return f[x];
    }
  }

  function union(x: number, y: number, cost: number): void {
    if (find(x) !== find(y)) {
      result += cost;
      count--;
    }

    f[find(x)] = find(y);
  }

  for (let i = 0; i < edges.length; i++) {
    union(edges[i][0], edges[i][1], edges[i][2]);
  }

  return count <= 1 ? result : Infinity;
}

// 邻接表
// 可用堆优化
export function dijkstra(graph: Array<Array<[number, number]>>, start: number): number[] {
  const distance: number[] = Array(graph.length).fill(Infinity);
  distance[start] = 0;
  const queue: Array<[number, number]> = [];
  queue.push([
    start,
    0,
  ]);

  while (queue.length) {
    const currentItem = queue.shift();
    const startIndex = currentItem[0];
    const weight = currentItem[1];

    if (distance[startIndex] >= weight) {
      const neighbor = graph[startIndex];
      for (let i = 0; i < neighbor.length; i++) {
        const nextWeight = weight + neighbor[i][1];
        const nextIndex = neighbor[i][0];
        if (distance[nextIndex] > nextWeight) {
          distance[nextIndex] = nextWeight;
          queue.push([
            nextIndex,
            nextWeight,
          ]);
        }
      }
    }
  }

  return distance;
}

// 邻接矩阵
export function floyd(graph: number[][]): number[][] {
  const dp: number[][] = Array(graph.length)
    .fill(null)
    .map(() => Array(graph.length)
      .fill(null));

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      dp[i][j] = graph[i][j];
    }
  }

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph.length; j++) {
      for (let k = 0; k < graph.length; k++) {
        dp[j][k] = Math.min(dp[j][k], dp[j][i] + dp[i][k]);
      }
    }
  }

  return dp;
}

// 邻接表
// https://leetcode-cn.com/problems/is-graph-bipartite/
// 785
export function isBipartite(graph: number[][]): boolean {
  const n = graph.length;
  const cache: number[] = Array(n).fill(0);
  const color: number[] = Array(n).fill(1);
  let result = true;

  for (let i = 0; i < n; i++) {
    if (cache[i] === 0) {
      dfs(i);
    }
  }

  function dfs(start: number): void {
    if (result === false) {
      return;
    }

    cache[start] = 1;
    const neighbor = graph[start];

    for (let i = 0; i < neighbor.length; i++) {
      if (cache[neighbor[i]] === 0) {
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