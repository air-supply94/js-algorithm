import { swap } from '../../utils/swap';
import {
  Comparator,
  initComparator,
} from '../../utils/comparator';
import { compareFunctionType } from '../../utils/@types';

export function insertionSort<T>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = initComparator(compareCallback);
  for (let i = 1; i < originalArray.length; i++) {
    let currentIndex = i;
    while (currentIndex > 0 && comparator.lessThan(originalArray[currentIndex], originalArray[currentIndex - 1])) {
      swap(originalArray, currentIndex, currentIndex - 1);
      currentIndex--;
    }
  }
  return originalArray;
}
