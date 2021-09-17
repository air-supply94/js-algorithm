import { kruskal, prim } from './utils';

function buildGraph(points: Array<[number, number]>): number[][] {
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

  return graph;
}

function getWeight(point1: [number, number], point2: [number, number]): number {
  return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}

// https://leetcode-cn.com/problems/min-cost-to-connect-all-points/
// 1584
export function minCostConnectPointsPrim(points: Array<[number, number]>): number {
  if (points.length <= 1) {
    return 0;
  } else {
    return prim(buildGraph(points));
  }
}

// https://leetcode-cn.com/problems/min-cost-to-connect-all-points/
// 1584
export function minCostConnectPointsKruskal(points: Array<[number, number]>): number {
  if (points.length <= 1) {
    return 0;
  } else {
    return kruskal(buildGraph(points));
  }
}
