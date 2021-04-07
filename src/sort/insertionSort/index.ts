import { Comparator, compareFunctionType } from '../../utils';
import { swap } from '../../utils/helper';

export function insertionSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
  for (let i = 0; i < originalArray.length; i++) {
    let currentIndex = i;
    while (currentIndex > 0 && comparator.lessThan(originalArray[currentIndex], originalArray[currentIndex - 1])) {
      swap(originalArray, currentIndex, currentIndex - 1);
      currentIndex--;
    }
  }
  return originalArray;
}
