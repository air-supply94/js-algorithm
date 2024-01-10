import type { interfaces } from '../../types';
import { Comparator, swap } from '../../utils';

export function quickSortInPlace<T = unknown>(originalArray: T[], compareCallback?: interfaces.CompareParams<T>, left = 0, right: number = originalArray.length - 1): T[] {
  if (left < right) {
    const comparator = new Comparator(compareCallback);
    const baseIndex = partitionArray(originalArray, comparator, left, right);

    quickSortInPlace(originalArray, comparator, left, baseIndex - 1);
    quickSortInPlace(originalArray, comparator, baseIndex, right);
  }

  return originalArray;
}

function partitionArray<T = unknown>(originalArray: T[], comparator: interfaces.Comparator<T>, left: number, right: number): number {
  const baseItem = originalArray[left + Math.floor(Math.random() * (right - left + 1))];
  let i = left;
  let j = right;

  while (i <= j) {
    while (comparator.lessThan(originalArray[i], baseItem)) {
      i++;
    }

    while (comparator.greaterThan(originalArray[j], baseItem)) {
      j--;
    }

    if (i <= j) {
      swap(originalArray, i, j);
      i++;
      j--;
    }
  }

  return i;
}
