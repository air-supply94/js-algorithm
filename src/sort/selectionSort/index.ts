import { compareFunctionType, Comparator, swap } from '../../utils';

export function selectionSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
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
