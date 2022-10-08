import { reverse } from '../../utils';

// https://leetcode-cn.com/problems/rotate-array/
// 189
export function rotate<T = unknown>(array: T[], k: number): T[] {
  const count = (k >>> 0) % array.length;
  reverse(array, 0, array.length - 1);
  reverse(array, 0, count - 1);
  reverse(array, count, array.length - 1);

  return array;
}

// https://leetcode-cn.com/problems/rotate-matrix-lcci/
// 07
// 求: f[row][col] = f[col][n - 1 - row]
// 1对角线: f[row][col] = f[col][row]
// 2水平对称: f[row][col] = f[row][n - 1 - col]
export function rotateMatrix<T = unknown>(array: T[][]): T[][] {
  const n = array.length;

  for (let h = 0; h < n; h++) {
    for (let w = h; w < n; w++) {
      const tmp = array[h][w];
      array[h][w] = array[w][h];
      array[w][h] = tmp;
    }
  }

  for (let h = 0; h < n; h++) {
    for (let w = 0; w < n >>> 1; w++) {
      const tmp = array[h][w];
      array[h][w] = array[h][n - 1 - w];
      array[h][n - 1 - w] = tmp;
    }
  }

  return array;
}
