import type { Compare } from '../../utils';
import { Comparator } from '../../utils';

export function quickSortExchange<T = unknown>(originalArray: T[], compare: Compare<T>): T[] {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const comparator = new Comparator(compare);
  const baseItem = originalArray[originalArray.length >>> 1];
  const left = [];
  const center = [];
  const right = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (comparator.equal(originalArray[i], baseItem)) {
      center.push(originalArray[i]);
    } else if (comparator.lessThan(originalArray[i], baseItem)) {
      left.push(originalArray[i]);
    } else {
      right.push(originalArray[i]);
    }
  }

  return quickSortExchange(left, comparator)
    .concat(center, quickSortExchange(right, comparator));
}
