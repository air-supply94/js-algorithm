import { Comparator, compareFunctionType, swap } from '../../utils';

export function insertionSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
  for (let i = 0; i < originalArray.length - 1; i++) {
    let currentIndex = i;
    while (currentIndex >= 0 && comparator.lessThan(originalArray[currentIndex + 1], originalArray[currentIndex])) {
      swap(originalArray, currentIndex, currentIndex + 1);
      currentIndex--;
    }
  }
  return originalArray;
}
