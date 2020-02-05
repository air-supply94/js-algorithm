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

  public toString(callback?: Function) {
    return this._doubleLinkedList.toString(callback);
  }

  public toArray(): T[] {
    const nodes = [];
    this._doubleLinkedList.eachFromTail(node => nodes.push(node.value));
    return nodes;
  }

  public pop() {
    const removedTail = this._doubleLinkedList.deleteTail();
    return removedTail ? removedTail.value : undefined;
  }

  public push(value) {
    this._doubleLinkedList.append(value);
    return this;
  }

  public peek() {
    return this.isEmpty() ? undefined : this._doubleLinkedList.tail.value;
  }

  public clear() {
    this._doubleLinkedList.clear();
    return this;
  }

  public has(value) {
    return this._doubleLinkedList.has(value);
  }

  public isEmpty() {
    return this.size === 0;
  }
}
