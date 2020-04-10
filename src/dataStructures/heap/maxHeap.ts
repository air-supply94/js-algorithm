import { Heap } from './heap';
import { MaxHeapInterface } from './types';
import {
  compareFunctionType,
  Comparator,
} from '../../utils';

export class MaxHeap<T = unknown> extends Heap<T> implements MaxHeapInterface<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    super(comparatorFunction);
  }

  public pairIsInCorrectOrder(parentElement: T, childElement: T): boolean {
    return this.compare.greaterThanOrEqual(parentElement, childElement);
  }
}
