import { Comparator, compareFunctionType } from '../../utils';
import { swap } from '../../utils/helper';

export function quickSortInPlace<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType, left = 0, right: number = originalArray.length - 1): T[] {
  if (originalArray.length > 1 && left < right) {
    const comparator = new Comparator(compareCallback);
    const baseIndex = partitionArray(originalArray, comparator, left, right);

    if (left < baseIndex - 1) {
      quickSortInPlace(originalArray, comparator, left, baseIndex - 1);
    }

    if (baseIndex < right) {
      quickSortInPlace(originalArray, comparator, baseIndex, right);
    }
  }

  return originalArray;
}

function partitionArray(originalArray, comparator: Comparator, left: number, right: number): number {
  const baseItem = originalArray[(left + right) >>> 1];
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
