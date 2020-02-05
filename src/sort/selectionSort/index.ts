import { swap } from '../../utils/swap';
import { Comparator } from '../../utils/comparator';
import { compareFunctionType } from '../../utils/@types';

export function selectionSort<T>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = compareCallback instanceof Comparator ? compareCallback : new Comparator(compareCallback);
  for (let i = 0; i < originalArray.length - 1; ++i) {
    let minIndex = i;
    for (let j = i + 1; j < originalArray.length; ++j) {
      if (comparator.greaterThan(originalArray[minIndex], originalArray[j])) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(originalArray, i, minIndex);
    }
  }
  return originalArray;
}
