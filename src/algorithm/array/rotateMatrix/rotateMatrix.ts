export function rotateMatrix<T = unknown>(array: T[]): T[] {
  const n = array.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      const tmp = array[i][j];
      array[i][j] = array[j][i];
      array[j][i] = tmp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      const tmp = array[i][j];
      array[i][j] = array[i][n - 1 - j];
      array[i][n - 1 - j] = tmp;
    }
  }

  return array;
}
