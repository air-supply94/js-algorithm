import { swap } from '../../../utils';

export function rotateArray<T = unknown>(array: T[], k: number): T[] {
  const count = (k >>> 0) % array.length;
  reverse(array, 0, array.length - 1);
  reverse(array, 0, count - 1);
  reverse(array, count, array.length - 1);

  return array;
}

function reverse<T = unknown>(array: T[], startIndex: number, endIndex: number): T[] {
  let i = startIndex;
  let j = endIndex;

  while (i < j) {
    swap(array, i, j);
    i++;
    j--;
  }

  return array;
}

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
