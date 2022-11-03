import type { Compare } from '../../utils';
import { Comparator, swap } from '../../utils';

export function insertionSort<T = unknown>(originalArray: T[], compare?: Compare<T>): T[] {
  const comparator = new Comparator(compare);
  const gap = 1;
  for (let i = 0; i < originalArray.length - gap; i++) {
    let currentIndex = i;
    while (currentIndex >= 0 && comparator.lessThan(originalArray[currentIndex + gap], originalArray[currentIndex])) {
      swap(originalArray, currentIndex + gap, currentIndex);
      currentIndex -= gap;
    }
  }
  return originalArray;
}

export function shellSort<T = unknown>(originalArray: T[], compare?: Compare<T>): T[] {
  const comparator = new Comparator(compare);
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
