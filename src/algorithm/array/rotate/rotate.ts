import { swap } from '../../../utils/helper';

export function rotate<T = unknown>(array: T[], k: number): T[] {
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
