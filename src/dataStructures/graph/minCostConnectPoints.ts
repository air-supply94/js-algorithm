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

function getWeight(point1: [number, number], point2: [number, number]): number {
  return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
}
