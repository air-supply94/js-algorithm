function getWeight(point1: [number, number], point2: [number, number]): number {
  return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}

// https://leetcode-cn.com/problems/min-cost-to-connect-all-points/
// 1584
export function minCostConnectPointsPrim(points: Array<[number, number]>): number {
  if (points.length <= 1) {
    return 0;
  }

  const n = points.length;
  const graph = Array(n)
    .fill(null)
    .map(() => Array(n)
      .fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const distance = getWeight(points[i], points[j]);
      graph[i][j] = distance;
      graph[j][i] = distance;
    }
  }

  const lowCost: number[] = Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    lowCost[i] = graph[0][i];
  }
  let sum = 0;

  for (let i = 1; i < n; i++) {
    let minValue = Infinity;
    let minIndex = 0;

    for (let j = 1; j < n; j++) {
      if (lowCost[j] !== 0) {
        if (lowCost[j] !== Infinity) {
          if (lowCost[j] < minValue) {
            minValue = lowCost[j];
            minIndex = j;
          }
        }
      }
    }

    sum += minValue;
    lowCost[minIndex] = 0;

    for (let j = 1; j < n; j++) {
      if (lowCost[j] !== 0) {
        if (lowCost[j] !== Infinity) {
          if (graph[minIndex][j] < lowCost[j]) {
            lowCost[j] = graph[minIndex][j];
          }
        }
      }
    }
  }

  return sum;
}

// https://leetcode-cn.com/problems/min-cost-to-connect-all-points/
// 1584
export function minCostConnectPointsKruskal(points: Array<[number, number]>): number {
  if (points.length <= 1) {
    return 0;
  }

  const n = points.length;
  const edges: Array<[number, number, number]> = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const distance = getWeight(points[i], points[j]);
      edges.push([
        i,
        j,
        distance,
      ]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  const f = Array(edges.length).fill(null);
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
