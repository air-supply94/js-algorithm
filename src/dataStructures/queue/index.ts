import { InterfaceQueue } from './@types';
import { DoubleLinkedList } from '../doubleLinkedList';
import { InterfaceDoubleLinkedListNode } from '../doubleLinkedList/@types';

export class Queue<T> implements InterfaceQueue<T> {
  constructor() {
    this.doubleLinkedList = new DoubleLinkedList();
  }

  public doubleLinkedList;

  public get size() {
    return this.doubleLinkedList.size;
  }

  public toString(callback?: (node: InterfaceDoubleLinkedListNode<T>) => string) {
    return this.doubleLinkedList.toString(callback);
  }

  public dequeue() {
    const removedHead = this.doubleLinkedList.deleteHead();
    return removedHead ? removedHead.value : undefined;
  }

  public enqueue(value) {
    this.doubleLinkedList.append(value);
    return this;
  }

  public peek() {
    // @ts-ignore
    return this.isEmpty() ? undefined : this.doubleLinkedList.head.value;
  }

  public clear() {
    this.doubleLinkedList.clear();
    return this;
  }

  public has(value) {
    return this.doubleLinkedList.has(value);
  }

  public isEmpty() {
    return this.size === 0;
  }
}
