// 邻接矩阵
export function prim(graph: number[][]): number {
  const n = graph.length;
  const lowCost: number[] = Array(n).fill(Number.POSITIVE_INFINITY);
  lowCost[0] = -1;
  for (let i = 1; i < n; i++) {
    lowCost[i] = graph[0][i];
  }
  let sum = 0;

  for (let i = 1; i < n; i++) {
    let minValue = Number.POSITIVE_INFINITY;
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

export function kruskal(graphLength: number, sortedEdges: [number, number, number][]): number {
  const parent: number[] = Array(graphLength).fill(null);
  for (let i = 0; i < graphLength; i++) {
    parent[i] = i;
  }

  let connectCount = graphLength;
  let sum = 0;

  function find(x: number): number {
    if (x === parent[x]) {
      return x;
    } else {
      parent[x] = find(parent[x]);
      return parent[x];
    }
  }

  function union(x: number, y: number, cost: number): void {
    const parentX = find(x);
    const parentY = find(y);
    if (parentX !== parentY) {
      sum += cost;
      connectCount--;
      parent[parentX] = parentY;
    }
  }

  for (let i = 0; i < sortedEdges.length; i++) {
    union(sortedEdges[i][0], sortedEdges[i][1], sortedEdges[i][2]);
  }

  return connectCount === 1 ? sum : Number.POSITIVE_INFINITY;
}
