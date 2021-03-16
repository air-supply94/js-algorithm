import { DoubleLinkedList } from '../doubleLinkedList';
import { DoubleLinkedListInterface, toStringCallback } from '../doubleLinkedList/types';
import { QueueInterface } from './types';

export class Queue<T = unknown> implements QueueInterface<T> {
  constructor() {
    this.doubleLinkedList = new DoubleLinkedList<T>();
  }

  private readonly doubleLinkedList: DoubleLinkedListInterface<T>;

  public get size(): number {
    return this.doubleLinkedList.size;
  }

  public toString(callback?: toStringCallback<T>): string {
    return this.doubleLinkedList.toString(callback);
  }

  public toArray(): T[] {
    const values = [];
    this.doubleLinkedList.eachFromHead((node) => {
      values.push(node.value);
    });
    return values;
  }

  public dequeue(): T | null {
    return this.isEmpty() ? null : this.doubleLinkedList.deleteHead().value;
  }

  public enqueue(value: T): T {
    return this.doubleLinkedList.append(value).value;
  }

  public peek(): T | null {
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
