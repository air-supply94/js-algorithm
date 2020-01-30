import Comparator from '../../utils/comparator';
import InterfaceComparator from '../../utils/comparator/@types';
import { compareFunctionType } from '../../utils/@types';

export default function (originalArray: any[], compareCallback?: Comparator | compareFunctionType): any[] {
  const comparator = compareCallback instanceof Comparator ? compareCallback : new Comparator(compareCallback);
  return mergeSort(originalArray, comparator);
}

function mergeSort(originalArray: any[], comparator: InterfaceComparator): any[] {
  if (originalArray.length <= 1) {
    return originalArray;
  }
  const middleIndex = Math.floor(originalArray.length / 2);
  const left = originalArray.slice(0, middleIndex);
  const right = originalArray.slice(middleIndex);
  return mergeSortedArrays(mergeSort(left, comparator), mergeSort(right, comparator), comparator);
}

function mergeSortedArrays(leftArray: any[], rightArray: any[], comparator: InterfaceComparator): any[] {
  let result: any[] = [];
  while (leftArray.length && rightArray.length) {
    result.push(comparator.lessThanOrEqual(leftArray[0], rightArray[0]) ? leftArray.shift() : rightArray.shift());
  }

  result = result.concat(leftArray.length ? leftArray : rightArray);

  return result;
}
