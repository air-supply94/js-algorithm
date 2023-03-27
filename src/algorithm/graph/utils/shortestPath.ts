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

  while (queue.length > 0) {
    const currentItem = queue.shift();
    const currentIndex = currentItem[0];
    const currentWeight = currentItem[1];
    const neighbor = graph[currentIndex];

    for (let i = 0; i < neighbor.length; i++) {
      const nextIndex = neighbor[i][0];
      const nextWeight = currentWeight + neighbor[i][1];
      if (distance[nextIndex] > nextWeight) {
        distance[nextIndex] = nextWeight;
        queue.push([
          nextIndex,
          nextWeight,
        ]);
      }
    }
  }

  return distance;
}

// 邻接矩阵
export function floyd(graph: number[][]): number[][] {
  const n = graph.length;
  const dp: number[][] = Array(n)
    .fill(null)
    .map(() => Array(n)
      .fill(null));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = graph[i][j];
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }

  return dp;
}
