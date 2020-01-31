import { Comparator } from '../../utils/comparator/index';
import { InterfaceComparator } from '../../utils/comparator/@types/index';
import { compareFunctionType } from '../../utils/@types';

export default function quickSortExchange(originalArray: any[], compareCallback?: Comparator | compareFunctionType): any[] {
  const comparator = compareCallback instanceof Comparator ? compareCallback : new Comparator(compareCallback);
  return quickSort(originalArray, comparator);
}

function quickSort(originalArray: any[], comparator: InterfaceComparator): any[] {
  if (originalArray.length <= 1) {
    return originalArray;
  }

  const pivotElement = originalArray.splice(Math.floor(originalArray.length / 2), 1)[0];
  const center: any[] = [pivotElement];
  const left: any[] = [];
  const right: any[] = [];
  while (originalArray.length) {
    const currentElement = originalArray.shift();
    if (comparator.equal(currentElement, pivotElement)) {
      center.push(currentElement);
    } else if (comparator.lessThan(currentElement, pivotElement)) {
      left.push(currentElement);
    } else {
      right.push(currentElement);
    }
  }

  return quickSort(left, comparator)
  .concat(center)
  .concat(quickSort(right, comparator));
}
