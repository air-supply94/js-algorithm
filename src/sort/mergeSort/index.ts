import { Comparator, compareFunctionType } from '../../utils';

export function mergeSort<T = unknown>(originalArray: T[], comparator?: Comparator | compareFunctionType): T[] {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const newComparator = new Comparator(comparator);

  const middleIndex = originalArray.length >>> 1;
  const left = originalArray.slice(0, middleIndex);
  const right = originalArray.slice(middleIndex);

  return mergeSortedArrays<T>(mergeSort<T>(left, newComparator), mergeSort<T>(right, newComparator), newComparator);
}

function mergeSortedArrays<T>(leftArray: T[], rightArray: T[], comparator: Comparator): T[] {
  const result: T[] = Array(leftArray.length + rightArray.length);
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < leftArray.length && j < rightArray.length) {
    if (comparator.lessThan(rightArray[j], leftArray[i])) {
      result[k] = rightArray[j];
      k++;
      j++;
    } else {
      result[k] = leftArray[i];
      k++;
      i++;
    }
  }

  while (i < leftArray.length) {
    result[k] = leftArray[i];
    k++;
    i++;
  }

  while (j < rightArray.length) {
    result[k] = rightArray[j];
    k++;
    j++;
  }

  return result;
}
