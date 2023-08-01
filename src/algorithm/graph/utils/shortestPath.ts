// 邻接表
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
    const currentNode = currentItem[0];
    const currentWeight = currentItem[1];
    const neighbor = graph[currentNode];

    for (let i = 0; i < neighbor.length; i++) {
      const neighborNode = neighbor[i][0];
      const neighborWeight = currentWeight + neighbor[i][1];
      if (neighborWeight <= distance[neighborNode]) {
        distance[neighborNode] = neighborWeight;
        queue.push([
          neighborNode,
          neighborWeight,
        ]);
      }
    }
  }

  return distance;
}

// 邻接矩阵
// 中转节点: 1---> 1,2 ---> 1,...,n
export function floyd(graph: number[][]): number[][] {
  const n = graph.length;
  const distance: number[][] = Array(n)
    .fill(null)
    .map(() => Array(n)
      .fill(null));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      distance[i][j] = graph[i][j];
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        //  distance[i][k]已经计算过前k - 1的中转点
        distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j]);
      }
    }
  }

  return distance;
}
