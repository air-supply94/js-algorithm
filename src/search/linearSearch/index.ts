import { Comparator } from '../../utils/comparator';
import { compareFunctionType } from '../../utils/@types';

export function linearSearch<T>(array: T[], seekElement?: any, compareCallback?: Comparator | compareFunctionType): number[] {
  const comparator = compareCallback instanceof Comparator ? compareCallback : new Comparator(compareCallback);
  const result: number[] = [];
  array.forEach((value, index) => {
    if (comparator.equal(value, seekElement)) {
      result.push(index);
    }
  });
  return result;
}
