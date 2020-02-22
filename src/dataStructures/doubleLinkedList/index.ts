import { DoubleLinkedListNode } from './doubleLinkedListNode';
import {
  Comparator,
  initComparator,
} from '../../utils/comparator';
import { compareFunctionType } from '../../utils/@types';
import {
  InterfaceDoubleLinkedList,
  InterfaceDoubleLinkedListNode,
} from './@types';

export class DoubleLinkedList<T> implements InterfaceDoubleLinkedList<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this.clear();
    this._compare = initComparator(comparatorFunction);
  }

  private _compare: Comparator;
  private _head: InterfaceDoubleLinkedListNode<T> | null;
  private _tail: InterfaceDoubleLinkedListNode<T> | null;
  private _size: number;

  private setSize(size: number): this {
    this._size = size;
    return this;
  }

  private setHead(head: InterfaceDoubleLinkedListNode<T> | null): this {
    this._head = head;
    return this;
  }

  private setTail(tail: InterfaceDoubleLinkedListNode<T> | null): this {
    this._tail = tail;
    return this;
  }

  get size(): number {
    return this._size;
  }

  get head(): InterfaceDoubleLinkedListNode<T> | null {
    return this._head;
  }

  get tail(): InterfaceDoubleLinkedListNode<T> | null {
    return this._tail;
  }

  public clear(): this {
    return this.setHead(null)
    .setTail(null)
    .setSize(0);
  }

  public toString(callback?: (node: T) => string): string {
    return this.toArray()
    .map(node => node.toString(callback))
    .toString();
  }

  public toArray(): InterfaceDoubleLinkedListNode<T>[] {
    const nodes = [];
    this.eachFromHead(node => nodes.push(node));
    return nodes;
  }

  public eachFromHead(callback: (node: InterfaceDoubleLinkedListNode<T>) => void): this {
    let currentNode = this.head;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }

    return this;
  }

  public eachFromTail(callback: (node: InterfaceDoubleLinkedListNode<T>) => void): this {
    let currentNode = this.tail;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.previous;
    }
    return this;
  }

  public fromArray(values: T[]): this {
    values.forEach(value => this.append(value));
    return this;
  }

  public deleteHead(): null | InterfaceDoubleLinkedListNode<T> {
    const deletedHead = this.head;
    if (this.head === this.tail) {
      this.clear();
    } else {
      this.setHead(this.head.next);
      this.head.setPrevious(null);
      this.setSize(this.size - 1);
    }

    return deletedHead;
  }

  public deleteTail(): null | InterfaceDoubleLinkedListNode<T> {
    const deletedTail = this.tail;
    if (this.head === this.tail) {
      this.clear();
    } else {
      this.setTail(this.tail.previous);
      this.tail.setNext(null);
      this.setSize(this.size - 1);
    }

    return deletedTail;
  }

  public find(findParams: { value?: T; callback?: (node: T) => boolean }): null | InterfaceDoubleLinkedListNode<T> {
    const {value, callback = {}} = findParams;
    let currentNode = this._head;

    while (currentNode) {
      if (typeof callback === 'function' && callback(currentNode.value)) {
        break;
      } else if (this._compare.equal(currentNode.value, value)) {
        break;
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  public delete(value?: T): null | InterfaceDoubleLinkedListNode<T> {
    let deletedNode = null;
    while (this.head && this._compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.setHead(this.head.next);
      this.setSize(this.size - 1);
    }

    if (this.head) {
      this.head.setPrevious(null);
    }

    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        if (this._compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          if (currentNode.next.next) {
            currentNode.next.next.setPrevious(currentNode);
          }
          currentNode.setNext(currentNode.next.next);
          this.setSize(this.size - 1);
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    this.setTail(currentNode);
    if (this.tail) {
      this.tail.setNext(null);
    }

    return deletedNode;
  }

  public append(value: T): this {
    const newNode = new DoubleLinkedListNode(value, null, this.tail);

    if (this.isEmpty()) {
      this.setTail(newNode)
      .setHead(newNode);
    } else {
      this.tail.setNext(newNode);
      this.setTail(newNode);
    }
    this.setSize(this.size + 1);

    return this;
  }

  public prepend(value: T): this {
    const newNode = new DoubleLinkedListNode(value, this.head);
    if (this.isEmpty()) {
      this.setHead(newNode)
      .setTail(newNode);
    } else {
      this.head.setPrevious(newNode);
      this.setHead(newNode);
    }
    this.setSize(this.size + 1);

    return this;
  }

  public reverse(): this {
    if (this.head === this.tail) {
      return this;
    }

    let current = this.head;
    this.setHead(this.tail);
    this.setTail(current);
    let previous: InterfaceDoubleLinkedListNode<T>;
    let next;
    while (current) {
      next = current.next;
      current.setNext(previous)
      .setPrevious(next);
      previous = current;
      current = next;
    }
    this.head.setPrevious(null);
    this.tail.setNext(null);
    return this;
  }

  public connect(...arg: InterfaceDoubleLinkedList<T>[]): this {
    const values = [];
    arg.forEach(doubleLinkedList => {
      doubleLinkedList.eachFromHead(nodes => {
        values.push(nodes.value);
      });
    });

    return this.fromArray(values);
  }

  public has(value?: T): boolean {
    return !!this.find({value});
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }
}
