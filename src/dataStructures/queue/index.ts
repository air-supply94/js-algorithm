import { InterfaceQueue } from './@types';
import { DoubleLinkedList } from '../doubleLinkedList';

export class Queue<T> implements InterfaceQueue<T> {
  constructor() {
    this._doubleLinkedList = new DoubleLinkedList<T>();
  }

  private _doubleLinkedList;

  get size(): number {
    return this._doubleLinkedList.size;
  }

  public toString(callback?: (node: T) => string): string {
    return this._doubleLinkedList.toString(callback);
  }

  public dequeue(): T {
    const removedHead = this._doubleLinkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  public enqueue(value: T): this {
    this._doubleLinkedList.append(value);
    return this;
  }

  public peek(): T {
    return this.isEmpty() ? null : this._doubleLinkedList.head.value;
  }

  public clear(): this {
    this._doubleLinkedList.clear();
    return this;
  }

  public has(value?: T): boolean {
    return this._doubleLinkedList.has(value);
  }

  public isEmpty(): boolean {
    return this._doubleLinkedList.isEmpty();
  }
}
