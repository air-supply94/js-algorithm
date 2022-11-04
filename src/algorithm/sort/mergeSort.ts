import { Comparator } from '../../utils';
import type { Compare } from '../../utils';

// https://leetcode-cn.com/problems/sort-an-array/submissions/
// 912
export function mergeSort<T = unknown>(originalArray: T[], compare?: Compare<T>, left = 0, right = originalArray.length - 1): T[] {
  if (left >= right) {
    return originalArray;
  }

  const comparator = new Comparator(compare);
  const middleIndex = (left + right) >>> 1;
  mergeSort(originalArray, comparator, left, middleIndex);
  mergeSort(originalArray, comparator, middleIndex + 1, right);
  mergeSortedArrays(originalArray, comparator, left, right);
  return originalArray;
}

function mergeSortedArrays<T = unknown>(originalArray: T[], comparator: Comparator<T>, left: number, right: number): void {
  const result: T[] = Array(right - left + 1)
    .fill(null);
  const middleIndex = (left + right) >>> 1;
  let l = left;
  let r = middleIndex + 1;
  let k = 0;

  while (l <= middleIndex && r <= right) {
    if (comparator.lessThan(originalArray[r], originalArray[l])) {
      result[k] = originalArray[r];
      k++;
      r++;
    } else {
      result[k] = originalArray[l];
      k++;
      l++;
    }
  }

  while (l <= middleIndex) {
    result[k] = originalArray[l];
    k++;
    l++;
  }

  while (r <= right) {
    result[k] = originalArray[r];
    k++;
    r++;
  }

  for (let i = 0; i < result.length; i++) {
    originalArray[i + left] = result[i];
  }
}
