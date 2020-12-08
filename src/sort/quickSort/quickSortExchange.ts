import { Comparator, compareFunctionType } from '../../utils';

export function quickSortExchange<T = unknown>(originalArray: T[], comparator: Comparator | compareFunctionType): T[] {
  comparator = new Comparator(comparator);
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const pivotElement = originalArray[originalArray.length >>> 1];
  const center = [];
  const left = [];
  const right = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (comparator.equal(originalArray[i], pivotElement)) {
      center.push(originalArray[i]);
    } else if (comparator.lessThan(originalArray[i], pivotElement)) {
      left.push(originalArray[i]);
    } else {
      right.push(originalArray[i]);
    }
  }

  return quickSortExchange(left, comparator)
    .concat(center, quickSortExchange(right, comparator));
}
