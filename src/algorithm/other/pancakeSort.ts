import { reverse } from '../../utils';

// https://leetcode-cn.com/problems/pancake-sorting/
// 969
export function pancakeSort(arr: number[]): number[] {
  const result: number[] = [];

  for (let i = arr.length - 1; i > 0; i--) {
    let maxValue = Number.NEGATIVE_INFINITY;
    let maxIndex = 0;

    for (let j = 0; j <= i; j++) {
      if (arr[j] > maxValue) {
        maxIndex = j;
        maxValue = arr[j];
      }
    }

    if (maxIndex < i) {
      reverse(arr, 0, maxIndex);
      result.push(maxIndex + 1);
      reverse(arr, 0, i);
      result.push(i + 1);
    }
  }

  return result;
}
