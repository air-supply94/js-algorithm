import { Comparator, compareFunctionType } from '../../utils';
import { swap } from '../../utils/helper';

export function bubbleSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
  for (let i = 0; i < originalArray.length - 1; ++i) {
    let isSwap = false;
    for (let j = 0; j < originalArray.length - i - 1; ++j) {
      if (comparator.greaterThan(originalArray[j], originalArray[j + 1])) {
        swap(originalArray, j, j + 1);
        isSwap = true;
      }
    }
    if (!isSwap) {
      return originalArray;
    }
  }
  return originalArray;
}
