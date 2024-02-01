import { reverse } from '../../utils';

// 剑指offer 21

export function reOrderArray(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2) === 0) {
      let j = -1;
      for (let k = i + 1; k < array.length && j === -1; k++) {
        if ((array[k] % 2) === 1) {
          j = k;
        }
      }

      if (j === -1) {
        return array;
      }

      const tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;

      reverse(array, i + 1, j);
      reverse(array, i + 2, j);
    }
  }

  return array;
}

// 剑指offer 81
export function reOrderArrayTwo(array: number[]): number[] {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] % 2 === 0) {
      const tmp = array[left];
      array[left] = array[right];
      array[right] = tmp;
      right--;
    } else {
      left++;
    }
  }

  return array;
}
