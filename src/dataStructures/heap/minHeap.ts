import { Heap } from './heap';
import { MinHeapInterface } from './types';
import {
  Comparator,
  compareFunctionType,
} from '../../utils';

export class MinHeap<T = unknown> extends Heap<T> implements MinHeapInterface<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    super(comparatorFunction);
  }

  public pairIsInCorrectOrder(parentElement: T, childElement: T): boolean {
    return this.compare.lessThanOrEqual(parentElement, childElement);
  }
}
