import { DoubleLinkedListNode } from './doubleLinkedListNode';
import { Comparator } from '../../utils/comparator';
import { compareFunctionType } from '../../utils/@types';
import {
  InterfaceDoubleLinkedList,
  InterfaceDoubleLinkedListNode,
} from './@types';

export class DoubleLinkedList<T> implements InterfaceDoubleLinkedList<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this.clear();
    this._compare = comparatorFunction instanceof Comparator ? comparatorFunction : new Comparator(comparatorFunction);
  }

  private _compare: Comparator;
  private _head: InterfaceDoubleLinkedListNode<T>;
  private _tail: InterfaceDoubleLinkedListNode<T>;
  private _size: number;

  get size() {
    return this._size;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  public clear(): this {
    this._head = this._tail = null;
    this._size = 0;
    return this;
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
    let currentNode = this._head;
    while (currentNode) {
      callback(currentNode);
      currentNode = currentNode.next;
    }

    return this;
  }

  public eachFromTail(callback: (node: InterfaceDoubleLinkedListNode<T>) => void): this {
    let currentNode = this._tail;
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
    const deletedHead = this._head;
    if (this._head === this._tail) {
      this.clear();
    } else {
      this._head = this._head.next;
      this._head.previous = null;
      --this._size;
    }

    return deletedHead;
  }

  public deleteTail(): null | InterfaceDoubleLinkedListNode<T> {
    const deletedTail = this._tail;
    if (this._head === this._tail) {
      this.clear();
    } else {
      this._tail = this._tail.previous;
      this._tail.next = null;
      --this._size;
    }

    return deletedTail;
  }

  public find(findParams: { value?: any; callback?: (node: T) => boolean }): null | InterfaceDoubleLinkedListNode<T> {
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

  public delete(value?: any): null | InterfaceDoubleLinkedListNode<T> {
    let deletedNode = null;
    while (this._head && this._compare.equal(this._head.value, value)) {
      deletedNode = this._head;
      this._head = this._head.next;
      --this._size;
    }
    if (this._head) {
      this._head.previous = null;
    }

    let currentNode = this._head;
    if (currentNode) {
      while (currentNode.next) {
        if (this._compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          if (currentNode.next.next) {
            currentNode.next.next.previous = currentNode;
          }
          currentNode.next = currentNode.next.next;
          --this._size;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    this._tail = currentNode;
    if (this._tail) {
      this._tail.next = null;
    }

    return deletedNode;
  }

  public append(value: T): this {
    const newNode = new DoubleLinkedListNode(value, null, this._tail);

    if (this.isEmpty()) {
      this._head = this._tail = newNode;
    } else {
      this._tail = this._tail.next = newNode;
    }
    ++this._size;

    return this;
  }

  public prepend(value: T): this {
    const newNode = new DoubleLinkedListNode(value, this._head);
    if (this.isEmpty()) {
      this._head = this._tail = newNode;
    } else {
      this._head = this._head.previous = newNode;
    }
    ++this._size;

    return this;
  }

  public reverse(): this {
    const value = [];
    this.eachFromTail(nodes => {
      value.push(nodes.value);
    });
    return this.clear()
    .fromArray(value);
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

  public has(value?: any): boolean {
    return !!this.find({value});
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }
}
