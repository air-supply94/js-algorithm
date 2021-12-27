// https://leetcode-cn.com/problems/path-with-minimum-effort/
// 1631
// 可用堆优化
export function minimumEffortPath(heights: number[][]): number {
  const height = heights.length;
  const width = heights[0].length;
  const result = Array(height)
    .fill(null)
    .map(() => Array(width)
      .fill(Infinity));
  result[0][0] = 0;

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
  const queue: Array<[number, number, number]> = [];
  queue.push([
    0,
    0,
    0,
  ]);

  while (queue.length) {
    const currentItem = queue.shift();
    const currentX = currentItem[0];
    const currentY = currentItem[1];
    const currentWeight = currentItem[2];

    if (result[currentX][currentY] >= currentWeight) {
      for (let i = 0; i < directionMatrix.length; i++) {
        const h = currentX + directionMatrix[i][0];
        const w = currentY + directionMatrix[i][1];
        if (h >= 0 && h < height && w >= 0 && w < width) {
          const nextWeight = Math.max(result[currentX][currentY], Math.abs(heights[currentX][currentY] - heights[h][w]));
          if (result[h][w] > nextWeight) {
            result[h][w] = nextWeight;
            queue.push([
              h,
              w,
              nextWeight,
            ]);
          }
        }
      }
    }
  }

  return result[height - 1][width - 1];
}
