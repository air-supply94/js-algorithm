import { Heap } from './heap';
import { InterfaceMaxHeap } from './@types';
import {
  compareFunctionType,
  Comparator,
} from '../../utils';

export class MaxHeap<T> extends Heap<T> implements InterfaceMaxHeap<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    super(comparatorFunction);
  }

  public pairIsInCorrectOrder(parentElement: T, childElement: T): boolean {
    return this.compare.greaterThanOrEqual(parentElement, childElement);
  }
}
