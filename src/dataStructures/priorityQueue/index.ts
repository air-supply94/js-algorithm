import MinHeap from '../heap/minHeap';
import Comparator from '../../utils/comparator/index';
import { InterfacePriority } from './@types';

export default class PriorityQueue implements InterfacePriority {
  constructor() {
    // tslint:disable-next-line:only-arrow-functions
    this.compareValue = new Comparator(function (a, b) {
      if (a.value === b.value) {
        return 0;
      }
      return a.value < b.value ? -1 : 1;
    });
    // tslint:disable-next-line:only-arrow-functions
    this.minHeap = new MinHeap(new Comparator(function (a, b) {
      if (a.priority === b.priority) {
        return 0;
      }
      return a.priority < b.priority ? -1 : 1;
    }));
  }

  public compareValue;
  public minHeap;

  public add(value, priority = 0) {
    this.minHeap.add({
      value,
      priority,
    });
    return this;
  }

  public remove(value) {
    this.minHeap.remove({value}, this.compareValue);
    return this;
  }

  public changePriority(value, priority) {
    // tslint:disable-next-line:only-arrow-functions
    const comparator = new Comparator(function (a, b) {
      if (a.value === b.value && a.priority !== b.priority) {
        return 0;
      }
      return -1;
    });
    let changeIndex = this.minHeap.findIndex({
      value,
      priority,
    }, comparator);
    while (changeIndex !== -1) {
      const item = this.minHeap.heapContainer[changeIndex];
      item.priority = priority;
      if (this.minHeap.hasLeftChild(changeIndex) && (!this.minHeap.hasParent(changeIndex) || this.minHeap.pairIsInCorrectOrder(this.minHeap.parent(changeIndex), item))) {
        this.minHeap.down(changeIndex);
      } else {
        this.minHeap.up(changeIndex);
      }
      changeIndex = this.minHeap.findIndex({
        value,
        priority,
      }, comparator);
    }

    return this;
  }

  public hasValue(value) {
    return this.minHeap.findIndex({value}, this.compareValue) !== -1;
  }
}
