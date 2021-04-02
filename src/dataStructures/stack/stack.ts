import { DoubleLinkedList } from '../doubleLinkedList';
import { DoubleLinkedListInterface, toStringCallback } from '../doubleLinkedList/types';
import { StackInterface } from './types';

export class Stack<T = unknown> implements StackInterface<T> {
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
    this.doubleLinkedList.eachFromTail((node) => {
      values.push(node.value);
    });
    return values;
  }

  public pop(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.doubleLinkedList.deleteTail().value;
    }
  }

  public push(value: T): T {
    return this.doubleLinkedList.append(value).value;
  }

  public peek(): T | null {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.doubleLinkedList.tail.value;
    }
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
