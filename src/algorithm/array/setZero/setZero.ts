export function setZero(array: number[][]): number[][] {
  const w = array.length;
  const h = array[0] ? array[0].length : 0;
  const row = {};
  const col = {};

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (!array[i][j]) {
        row[i] = true;
        col[j] = true;
      }
    }
  }

  for (let i = 0; i < w; i++) {
    if (row[i]) {
      for (let j = 0; j < h; j++) {
        array[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < h; i++) {
    if (col[i]) {
      for (let j = 0; j < w; j++) {
        array[j][i] = 0;
      }
    }
  }

  return array;
}
