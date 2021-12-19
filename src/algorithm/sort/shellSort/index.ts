import type { compareFunctionType } from '../../../utils';
import { Comparator, swap } from '../../../utils';

export function shellSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
  let gap = originalArray.length >>> 1;

  while (gap > 0) {
    for (let i = 0; i < originalArray.length - gap; i++) {
      let currentIndex = i;

      while (currentIndex >= 0 && comparator.lessThan(originalArray[currentIndex + gap], originalArray[currentIndex])) {
        swap(originalArray, currentIndex, currentIndex + gap);
        currentIndex -= gap;
      }
    }

    gap >>= 1;
  }

  return originalArray;
}
