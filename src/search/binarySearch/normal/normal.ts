import { Comparator, compareFunctionType } from '../../../utils';

export function binarySearch<T = unknown>(sortedArray: T[], seekElement: T, compareCallback?: Comparator | compareFunctionType): number {
  const comparator = new Comparator(compareCallback);
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  let middleIndex = 0;

  while (startIndex <= endIndex) {
    middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (comparator.equal(seekElement, sortedArray[middleIndex])) {
      return middleIndex;
    } else if (comparator.lessThan(seekElement, sortedArray[middleIndex])) {
      endIndex = middleIndex - 1;
    } else {
      startIndex = middleIndex + 1;
    }
  }

  return -1;
}
