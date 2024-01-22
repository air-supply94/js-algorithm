import type { interfaces } from '../../types';
import { Comparator } from '../../utils';

export function insertionSort<T = unknown>(originalArray: T[], compare?: interfaces.CompareParams<T>): T[] {
  const comparator = new Comparator(compare);
  const gap = 1;
  for (let i = 0; i < originalArray.length - gap; i++) {
    let currentIndex = i;
    while (currentIndex >= 0 && comparator.lessThan(originalArray[currentIndex + gap], originalArray[currentIndex])) {
      const t = originalArray[currentIndex + gap];
      originalArray[currentIndex + gap] = originalArray[currentIndex];
      originalArray[currentIndex] = t;
      currentIndex -= gap;
    }
  }
  return originalArray;
}

export function shellSort<T = unknown>(originalArray: T[], compare?: interfaces.CompareParams<T>): T[] {
  const comparator = new Comparator(compare);
  let gap = originalArray.length >>> 1;

  while (gap > 0) {
    for (let i = 0; i < originalArray.length - gap; i++) {
      let currentIndex = i;

      while (currentIndex >= 0 && comparator.lessThan(originalArray[currentIndex + gap], originalArray[currentIndex])) {
        const t = originalArray[currentIndex];
        originalArray[currentIndex] = originalArray[currentIndex + gap];
        originalArray[currentIndex + gap] = t;
        currentIndex -= gap;
      }
    }

    gap >>= 1;
  }

  return originalArray;
}
