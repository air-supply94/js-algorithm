import {
  Comparator,
  initComparator,
} from '../../utils/comparator';
import { InterfaceComparator } from '../../utils/comparator/@types';
import { compareFunctionType } from '../../utils/@types';

export function mergeSort<T>(originalArray: T[], comparator?: Comparator | compareFunctionType): T[] {
  comparator = initComparator(comparator);

  if (originalArray.length <= 1) {
    return originalArray;
  }
  const middleIndex = Math.floor(originalArray.length / 2);
  const left = originalArray.slice(0, middleIndex);
  const right = originalArray.slice(middleIndex);
  return mergeSortedArrays<T>(mergeSort<T>(left, comparator), mergeSort<T>(right, comparator), comparator);
}

function mergeSortedArrays<T>(leftArray: T[], rightArray: T[], comparator: InterfaceComparator): T[] {
  let result: T[] = [];
  while (leftArray.length && rightArray.length) {
    result.push(comparator.lessThanOrEqual(leftArray[0], rightArray[0]) ? leftArray.shift() : rightArray.shift());
  }

  result = result.concat(leftArray.length ? leftArray : rightArray);

  return result;
}
