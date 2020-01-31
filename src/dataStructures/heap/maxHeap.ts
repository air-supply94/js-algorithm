import Heap from './heap';
import { InterfaceMaxHeap } from './@types';
import { compareFunctionType } from '../../utils/@types';
import { Comparator } from '../../utils/comparator';

export default class MaxHeap extends Heap implements InterfaceMaxHeap {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    super(comparatorFunction);
  }

  public pairIsInCorrectOrder(parentElement, childElement) {
    return this.compare.greaterThanOrEqual(parentElement, childElement);
  }
}
