import { dijkstra } from './utils/shortestPath';

function buildGraph(times: [number, number, number][], n: number): [number, number][][] {
  const graph: [number, number][][] = Array(n).fill(null);
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < times.length; i++) {
    graph[times[i][0] - 1].push([times[i][1] - 1, times[i][2]]);
  }

  return graph;
}

// https://leetcode-cn.com/problems/network-delay-time/
// 743
export function networkDelayTime(times: [number, number, number][], n: number, k: number): number {
  const distance = dijkstra(buildGraph(times, n), k - 1);
  let result = 0;
  for (let i = 0; i < distance.length; i++) {
    if (distance[i] === Number.POSITIVE_INFINITY) {
      return -1;
    }

    result = Math.max(result, distance[i]);
  }

  return result;
}
