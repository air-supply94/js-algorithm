import { Comparator, compareFunctionType } from '../../utils';

export function quickSortExchange<T = unknown>(originalArray: T[], comparator: Comparator | compareFunctionType): T[] {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const newComparator = new Comparator(comparator);
  const baseItem = originalArray[originalArray.length >>> 1];
  const left = [];
  const center = [];
  const right = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (newComparator.equal(originalArray[i], baseItem)) {
      center.push(originalArray[i]);
    } else if (newComparator.lessThan(originalArray[i], baseItem)) {
      left.push(originalArray[i]);
    } else {
      right.push(originalArray[i]);
    }
  }

  return quickSortExchange(left, newComparator)
    .concat(center, quickSortExchange(right, newComparator));
}
