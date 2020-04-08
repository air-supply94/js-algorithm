import { StackInterface } from './types';
import {
  DoubleLinkedList,
  DoubleLinkedListInterface,
} from '../doubleLinkedList';

export * from './types';

export class Stack<T = unknown> implements StackInterface<T> {
  constructor() {
    this._doubleLinkedList = new DoubleLinkedList<T>();
  }

  private readonly _doubleLinkedList: DoubleLinkedListInterface<T>;

  private get doubleLinkedList() {
    return this._doubleLinkedList;
  }

  get size(): number {
    return this.doubleLinkedList.size;
  }

  public toString(callback?: (value: T) => string): string {
    return this.doubleLinkedList.toString(callback);
  }

  public toArray(): T[] {
    const values = [];
    this.doubleLinkedList.eachFromTail(node => {
      values.push(node.value);
    });
    return values;
  }

  public pop(): T | null {
    const removedTail = this.doubleLinkedList.deleteTail();
    return removedTail ? removedTail.value : null;
  }

  public push(value: T): this {
    this.doubleLinkedList.append(value);
    return this;
  }

  public peek(): T | null {
    return this.isEmpty() ? null : this.doubleLinkedList.tail.value;
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
