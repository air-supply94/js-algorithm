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

  const fx = Array(n).fill(null);
  for (let i = 0; i < n; i++) {
    fx[i] = i;
  }
  let count = n;
  let result = 0;

  function find(x: number): number {
    if (fx[x] === x) {
      return x;
    } else {
      fx[x] = find(fx[x]);
      return fx[x];
    }
  }

  function union(x: number, y: number, cost: number): void {
    if (find(x) !== find(y)) {
      result += cost;
      count--;
    }

    fx[find(x)] = find(y);
  }

  for (let i = 0; i < edges.length; i++) {
    union(edges[i][0], edges[i][1], edges[i][2]);
  }

  return count <= 1 ? result : Infinity;
}
