import { Comparator, compareFunctionType } from '../../utils';

export function linearSearch<T = unknown>(array: T[], seekElement?: any, compareCallback?: Comparator | compareFunctionType): number[] {
  const comparator = new Comparator(compareCallback);
  const result: number[] = [];
  array.forEach((value, index) => {
    if (comparator.equal(value, seekElement)) {
      result.push(index);
    }
  });
  return result;
}
