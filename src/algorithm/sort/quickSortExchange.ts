import type { interfaces } from '../../types';
import { Comparator } from '../../utils';

export function quickSortExchange<T = unknown>(originalArray: T[], compare: interfaces.CompareParams<T>): T[] {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const comparator = new Comparator(compare);
  const baseItem = originalArray[Math.floor(originalArray.length * Math.random())];
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
