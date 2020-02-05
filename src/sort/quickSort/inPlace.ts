/*
import { Comparator } from '../../utils/comparator';
import { InterfaceComparator } from '../../utils/comparator/@types';
import { compareFunctionType } from '../../utils/@types';
import swap from '../../utils/swap';

export default function quickSortExchange(originalArray: any[], compareCallback?: Comparator | compareFunctionType): any[] {
  const comparator = compareCallback instanceof Comparator ? compareCallback : new Comparator(compareCallback);
  return quickSort(originalArray, 0, originalArray.length - 1, comparator);
}

function quickSort(originalArray: any[], inputLowIndex: number, inputHighIndex: number, comparator: InterfaceComparator): any[] {
  if (inputLowIndex < inputHighIndex) {
    const partitionIndex = partitionArray(originalArray, inputLowIndex, inputHighIndex, comparator);
    quickSort(originalArray, inputLowIndex, partitionIndex - 1, comparator);
    quickSort(originalArray, partitionIndex + 1, inputHighIndex, comparator);

  return originalArray;
}

function partitionArray(originalArray, lowIndex: number, highIndex: number, comparator: InterfaceComparator): number {
  const pivot = originalArray[highIndex];

  let partitionIndex = lowIndex;
  for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex++) {
    if (comparator.lessThan(originalArray[currentIndex], pivot)) {
      swap(originalArray, partitionIndex, currentIndex);
      partitionIndex++;
    }
  }

  swap(originalArray, partitionIndex, highIndex);
  return partitionIndex;
}
*/
