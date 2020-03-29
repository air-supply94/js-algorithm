import {
  Comparator,
  swap,
  compareFunctionType,
} from '../../utils';

export function quickSortInPlace<T>(originalArray: T[], compareCallback?: Comparator | compareFunctionType, left: number = 0, right: number = originalArray.length - 1): T[] {
  const comparator = new Comparator(compareCallback);
  if (originalArray.length > 1) {
    const partitionIndex = partitionArray(originalArray, comparator, left, right);

    if (left < partitionIndex - 1) {
      quickSortInPlace(originalArray, comparator, left, partitionIndex - 1);
    }
    if (partitionIndex < right) {
      quickSortInPlace(originalArray, comparator, partitionIndex, right);
    }
  }

  return originalArray;
}

function partitionArray(originalArray, comparator: Comparator, left: number, right: number): number {
  const pivot = originalArray[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (comparator.lessThan(originalArray[i], pivot)) {
      i++;
    }

    while (comparator.greaterThan(originalArray[j], pivot)) {
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
