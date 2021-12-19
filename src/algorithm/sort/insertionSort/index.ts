import type { compareFunctionType } from '../../../utils';
import { Comparator, swap } from '../../../utils';

export function insertionSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
  for (let i = 1; i < originalArray.length; i++) {
    let currentIndex = i;
    while (currentIndex > 0 && comparator.lessThan(originalArray[currentIndex], originalArray[currentIndex - 1])) {
      swap(originalArray, currentIndex, currentIndex - 1);
      currentIndex--;
    }
  }
  return originalArray;
}
