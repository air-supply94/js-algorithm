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

    if (distance[currentIndex] >= currentWeight) {
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

  for (let k = 0; k < graph.length; k++) {
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j]);
      }
    }
  }

  return dp;
}
