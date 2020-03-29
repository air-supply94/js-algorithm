import { QueueInterface } from './types';
import { DoubleLinkedList } from '../doubleLinkedList';

export * from './types';

export class Queue<T = unknown> implements QueueInterface<T> {
  constructor() {
    this._doubleLinkedList = new DoubleLinkedList<T>();
  }

  private _doubleLinkedList: DoubleLinkedList<T>;

  get doubleLinkedList() {
    return this._doubleLinkedList;
  }

  get size(): number {
    return this.doubleLinkedList.size;
  }

  public toString(callback?: (value: T) => string): string {
    return this.doubleLinkedList.toString(callback);
  }

  public dequeue(): T {
    const removedHead = this.doubleLinkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  public enqueue(value: T): this {
    this.doubleLinkedList.append(value);
    return this;
  }

  public peek(): T {
    return this.isEmpty() ? null : this.doubleLinkedList.head.value;
  }

  public clear(): this {
    this.doubleLinkedList.clear();
    return this;
  }

  public has(value?: T): boolean {
    return this.doubleLinkedList.has(value);
  }

  public isEmpty(): boolean {
    return this.doubleLinkedList.isEmpty();
  }
}
