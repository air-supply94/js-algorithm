import { swap, Comparator, compareFunctionType } from '../../utils';

export function bubbleSort<T = unknown>(originalArray: T[], compareCallback?: Comparator | compareFunctionType): T[] {
  const comparator = new Comparator(compareCallback);
  let isSwap: boolean;
  for (let i = 0; i < originalArray.length; ++i) {
    isSwap = false;
    for (let j = 0; j < originalArray.length - i - 1; ++j) {
      if (comparator.greaterThan(originalArray[j], originalArray[j + 1])) {
        swap(originalArray, j, j + 1);
        isSwap = true;
      }
    }
    if (!isSwap) {
      break;
    }
  }
  return originalArray;
}
