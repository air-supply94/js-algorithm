import { Comparator, compareFunctionType } from '../../utils';
import { swap } from '../../utils/helper';

export function shellSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
  let gap = originalArray.length >>> 1;

  while (gap > 0) {
    for (let i = 0; i < (originalArray.length - gap); i++) {
      let currentIndex = i;
      let nextIndex = i + gap;

      while (currentIndex >= 0) {
        if (comparator.lessThan(originalArray[nextIndex], originalArray[currentIndex])) {
          swap(originalArray, currentIndex, nextIndex);
        }

        nextIndex -= gap;
        currentIndex -= gap;
      }
    }

    gap >>= 1;
  }

  return originalArray;
}
