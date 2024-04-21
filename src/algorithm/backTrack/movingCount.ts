// 剑指offer
// https://www.nowcoder.com/practice/6e5207314b5241fb83f2329e89fdecc8
export function movingCount(
  threshold: number,
  rows: number,
  cols: number,
  h = 0,
  w = 0,
  cache: number[][] = Array(rows)
    .fill(null)
    .map(() => Array(cols).fill(0)),
): number {
  if (h < 0 || h >= rows || w < 0 || w >= cols || cache[h][w] !== 0 || cal(h) + cal(w) > threshold) {
    return 0;
  }

  cache[h][w] = 1;
  const top = movingCount(threshold, rows, cols, h - 1, w, cache);
  const right = movingCount(threshold, rows, cols, h, w + 1, cache);
  const bottom = movingCount(threshold, rows, cols, h + 1, w, cache);
  const left = movingCount(threshold, rows, cols, h, w - 1, cache);
  return 1 + top + right + bottom + left;
}

function cal(num: number) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = (num - (num % 10)) / 10;
  }
  return sum;
}
