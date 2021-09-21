import { Heap } from '../heap';

// 邻接表
export function hasCircle(graph: number[][]): boolean {
  const visitedCache: boolean[] = Array(graph.length)
    .fill(false);
  const pathTmp: boolean[] = Array(graph.length)
    .fill(false);
  let graphHasCircle = false;

  for (let i = 0; i < graph.length; i++) {
    dfs(graph, i, visitedCache, pathTmp);
  }

  function dfs(graph: number[][], start: number, visited: boolean[], path: boolean[]): void {
    if (path[start]) {
      graphHasCircle = true;
    }

    if (visited[start] || graphHasCircle) {
      return;
    }

    path[start] = true;
    visited[start] = true;

    for (let i = 0; i < graph[start].length; i++) {
      dfs(graph, graph[start][i], visited, path);
    }

    path[start] = false;
  }

  return !graphHasCircle;
}

// 邻接表
export function topologicalSortingDfs(graph: number[][]): number[] {
  const visitedCache: boolean[] = Array(graph.length)
    .fill(false);
  const pathTmp: number[] = [];

  if (!hasCircle(graph)) {
    return [];
  }

  function dfs(graph: number[][], start: number, visited: boolean[], path: number[]): void {
    if (visited[start]) {
      return;
    }
    visited[start] = true;

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
  const lowCost: number[] = Array(n)
    .fill(Infinity);
  for (let i = 1; i < n; i++) {
    lowCost[i] = graph[0][i];
  }
  let sum = 0;

  for (let i = 1; i < n; i++) {
    let minValue = Infinity;
    let minIndex = 0;

    for (let j = 1; j < n; j++) {
      if (lowCost[j] !== Infinity && lowCost[j] < minValue) {
        minValue = lowCost[j];
        minIndex = j;
      }
    }

    sum += minValue;
    lowCost[minIndex] = Infinity;

    for (let j = 1; j < n; j++) {
      if (lowCost[j] !== Infinity && graph[minIndex][j] < lowCost[j]) {
        lowCost[j] = graph[minIndex][j];
      }
    }
  }

  return sum;
}

// 邻接矩阵
export function kruskal(graph: number[][]): number {
  const n = graph.length;
  const edges: Array<[number, number, number]> = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j && graph[i][j] !== Infinity) {
        edges.push([
          i,
          j,
          graph[i][j],
        ]);
      }
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

// 邻接矩阵
export function dijkstra(graph: number[][], start: number): number[] {
  const distance: number[] = Array(graph.length)
    .fill(Infinity);
  distance[start] = 0;
  const minHeap = new Heap<[number, number]>((a, b) => a[1] - b[1] < 0);
  minHeap.add([
    start,
    0,
  ]);

  while (!minHeap.isEmpty()) {
    const currentItem = minHeap.poll();
    const startIndex = currentItem[0];
    const weight = currentItem[1];

    if (weight <= distance[startIndex]) {
      const neighbor = graph[startIndex];
      for (let i = 0; i < neighbor.length; i++) {
        const nextWeight = weight + neighbor[i];
        if (startIndex !== i && neighbor[i] !== Infinity && distance[i] > nextWeight) {
          distance[i] = nextWeight;
          minHeap.add([
            i,
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
