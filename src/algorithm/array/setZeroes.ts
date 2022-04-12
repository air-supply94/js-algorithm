// https://leetcode-cn.com/problems/set-matrix-zeroes/
// 73
export function setZeroes(array: number[][]): number[][] {
  const height = array.length;
  const width = array[0] ? array[0].length : 0;
  const row = new Set<number>();
  const col = new Set<number>();

  for (let h = 0; h < height; h++) {
    for (let w = 0; w < width; w++) {
      if (array[h][w] === 0) {
        row.add(h);
        col.add(w);
      }
    }
  }

  for (let h = 0; h < height; h++) {
    if (row.has(h)) {
      for (let w = 0; w < width; w++) {
        array[h][w] = 0;
      }
    }
  }

  for (let w = 0; w < width; w++) {
    if (col.has(w)) {
      for (let h = 0; h < height; h++) {
        array[h][w] = 0;
      }
    }
  }

  return array;
}
