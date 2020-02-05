import { Heap } from './heap';
import {
  InterfaceHeap,
  InterfaceMaxHeap,
} from './@types';
import { compareFunctionType } from '../../utils/@types';
import { Comparator } from '../../utils/comparator';

export class MaxHeap<T> extends Heap<T> implements InterfaceHeap<T>, InterfaceMaxHeap<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    super(comparatorFunction);
  }

  public pairIsInCorrectOrder(parentElement: T, childElement: T): boolean {
    return this.compare.greaterThanOrEqual(parentElement, childElement);
  }
}
