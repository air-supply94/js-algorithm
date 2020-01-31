import Heap from './heap';
import { InterfaceMinHeap, InterfaceHeap } from './@types';
import { compareFunctionType } from '../../utils/@types';
import { Comparator } from '../../utils/comparator';

export default class MinHeap extends Heap implements InterfaceHeap, InterfaceMinHeap {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    super(comparatorFunction);
  }

  public pairIsInCorrectOrder(parentElement, childElement) {
    return this.compare.lessThanOrEqual(parentElement, childElement);
  }
}
