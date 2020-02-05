import {
  Comparator,
  initComparator,
} from '../../utils/comparator';
import { compareFunctionType } from '../../utils/@types';

export function binarySearch<T>(sortedArray: T[], seekElement?: any, compareCallback?: Comparator | compareFunctionType): number {
  const comparator = initComparator(compareCallback);
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
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
