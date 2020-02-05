import {
  Comparator,
  initComparator,
} from '../../utils/comparator';
import { compareFunctionType } from '../../utils/@types';

export function linearSearch<T>(array: T[], seekElement?: any, compareCallback?: Comparator | compareFunctionType): number[] {
  const comparator = initComparator(compareCallback);
  const result: number[] = [];
  array.forEach((value, index) => {
    if (comparator.equal(value, seekElement)) {
      result.push(index);
    }
  });
  return result;
}
