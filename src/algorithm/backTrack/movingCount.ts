// 剑指offer 13
export function movingCount(threshold: number, rows: number, cols: number, h = 0, w = 0, cache: number[][] = Array(rows)
  .fill(null)
  .map(() => Array(cols)
    .fill(0))): number {
  if (h < 0 || h >= rows || w < 0 || w >= cols || cache[h][w] !== 0 || cal(h) + cal(w) > threshold) {
    return 0;
  }

  cache[h][w] = 1;
  return 1 + movingCount(threshold, rows, cols, h - 1, w, cache) + movingCount(threshold, rows, cols, h, w + 1, cache) + movingCount(threshold, rows, cols, h + 1, w, cache) + movingCount(threshold, rows, cols, h, w - 1, cache);
}

function cal(num: number) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = (num - num % 10) / 10;
  }
  return sum;
}
