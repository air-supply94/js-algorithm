import { InterfaceStack } from './@types';
import { DoubleLinkedList } from '../doubleLinkedList';

export class Stack<T> implements InterfaceStack<T> {
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

  public toArray(): T[] {
    const nodes = [];
    this._doubleLinkedList.eachFromTail(node => nodes.push(node.value));
    return nodes;
  }

  public pop(): T {
    const removedTail = this._doubleLinkedList.deleteTail();
    return removedTail ? removedTail.value : null;
  }

  public push(value: T): this {
    this._doubleLinkedList.append(value);
    return this;
  }

  public peek(): T {
    return this.isEmpty() ? null : this._doubleLinkedList.tail.value;
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
