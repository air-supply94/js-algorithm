import { Heap } from '../../dataStructures/heap/heap';

// https://leetcode-cn.com/problems/trapping-rain-water-ii/
// 407
export function trapRainWater(heightMap: number[][]): number {
  const height = heightMap.length;
  const width = heightMap[0].length;
  if (height <= 2 || width <= 2) {
    return 0;
  }

  const visited = Array(height)
    .fill(null)
    .map(() => Array(width)
      .fill(0));
  const minHeap = new Heap<[number, number, number]>((a, b) => a[2] <= b[2]);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
        visited[i][j] = 1;
        minHeap.add([
          i,
          j,
          heightMap[i][j],
        ]);
      }
    }
  }

  const directionMatrix = [
    [
      -1,
      0,
    ],
    [
      1,
      0,
    ],
    [
      0,
      -1,
    ],
    [
      0,
      1,
    ],
  ];
  let result = 0;

  while (!minHeap.isEmpty()) {
    const currentItem = minHeap.poll();
    const currentX = currentItem[0];
    const currentY = currentItem[1];
    const currentWeight = currentItem[2];

    for (let i = 0; i < directionMatrix.length; i++) {
      const h = currentX + directionMatrix[i][0];
      const w = currentY + directionMatrix[i][1];
      if (h >= 0 && h < height && w >= 0 && w < width && visited[h][w] === 0) {
        if (currentWeight > heightMap[h][w]) {
          result += currentWeight - heightMap[h][w];
        }

        visited[h][w] = 1;
        minHeap.add([
          h,
          w,
          currentWeight > heightMap[h][w] ? currentWeight : heightMap[h][w],
        ]);
      }
    }
  }

  return result;
}
