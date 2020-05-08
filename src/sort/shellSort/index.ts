import { swap } from '../../utils/swap';
import {
  Comparator,
  compareFunctionType,
} from '../../utils';

export function shellSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
  let gap = originalArray.length / 2 | 0;

  while (gap > 0) {
    for (let i = 0; i < (originalArray.length - gap); i++) {
      let currentIndex = i;
      let gapShiftedIndex = i + gap;

      while (currentIndex >= 0) {
        if (comparator.lessThan(originalArray[gapShiftedIndex], originalArray[currentIndex])) {
          swap(originalArray, currentIndex, gapShiftedIndex);
        }

        gapShiftedIndex -= gap;
        currentIndex -= gap;
      }
    }

    gap >>= 1;
  }

  return originalArray;
}
