import { MinHeap } from '../heap';
import { Comparator } from '../../utils/comparator';
import {
  PriorityQueueInterface,
  PriorityQueueItem,
} from './types';

function valueCompare(a: Pick<PriorityQueueItem, 'value'>, b: Pick<PriorityQueueItem, 'value'>) {
  if (a.value === b.value) {
    return 0;
  }

  return a.value < b.value ? -1 : 1;
}

function priorityCompare(a: Pick<PriorityQueueItem, 'priority'>, b: Pick<PriorityQueueItem, 'priority'>) {
  if (a.priority === b.priority) {
    return 0;
  }
  return a.priority < b.priority ? -1 : 1;
}

export class PriorityQueue<T = unknown> implements PriorityQueueInterface<T> {
  constructor() {
    this.valueCompare = new Comparator(valueCompare);
    this.priorityCompare = new Comparator(priorityCompare);
    this.minHeap = new MinHeap<PriorityQueueItem<T>>(this.priorityCompare);
  }

  private readonly valueCompare;
  private readonly priorityCompare;
  private readonly minHeap;

  public isEmpty(): boolean {
    return this.minHeap.isEmpty();
  }

  public sort(): T[] {
    return this.minHeap.sort()
    .map(item => item.value);
  }

  public poll(): T | undefined {
    return this.isEmpty() ? undefined : this.minHeap.poll().value;
  }

  public peek(): T | undefined {
    return this.isEmpty() ? undefined : this.minHeap.peek().value;
  }

  public add(value: T, priority = 0): this {
    this.minHeap.add({
      value,
      priority,
    });
    return this;
  }

  public removeAll(value: T): T[] {
    return this.minHeap.removeAll({value}, this.valueCompare)
    .map(item => item.value);
  }

  public changeAllPriority(value: T, priority: number): this {
    this.removeAll(value)
    .forEach(item => this.add(item, priority));

    return this;
  }

  public has(value: T): boolean {
    return this.minHeap.findIndex({value}, this.valueCompare) !== -1;
  }
}
