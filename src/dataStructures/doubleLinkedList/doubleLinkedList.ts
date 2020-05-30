import { Comparator, compareFunctionType } from '../../utils';
import { DoubleLinkedListNode } from './doubleLinkedListNode';
import { DoubleLinkedListInterface, DoubleLinkedListNodeInterface, eachCallback, FindParams, toStringCallback } from './types';
import { reverse, get, each, formatIndex } from './utils';

export class DoubleLinkedList<T = unknown> implements DoubleLinkedListInterface<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this.clear();
    this._compare = new Comparator(comparatorFunction);
  }

  private readonly _compare: Comparator;

  private _head: DoubleLinkedListNodeInterface<T> | null;

  private _tail: DoubleLinkedListNodeInterface<T> | null;

  private _size: number;

  private deleteValueBase(count: number, value?: T): null | DoubleLinkedListNodeInterface<T> {
    let deleteCount = 0;
    let deletedNode = null;
    while (deleteCount < count && this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.setHead(this.head.next);
      this.setSize(this.size - 1);
      ++deleteCount;
    }

    if (this.head) {
      this.head.setPrevious(null);
    }

    let currentNode = this.head;
    if (currentNode) {
      while (deleteCount < count && currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          if (currentNode.next.next) {
            currentNode.next.next.setPrevious(currentNode);
          }
          ++deleteCount;
          currentNode.setNext(currentNode.next.next);
          this.setSize(this.size - 1);
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (!currentNode || !currentNode.next) {
      this.setTail(currentNode);
    }

    return deletedNode;
  }

  public get compare() {
    return this._compare;
  }

  public get size(): number {
    return this._size;
  }

  public setSize(size: number): this {
    this._size = size;
    return this;
  }

  public get head(): DoubleLinkedListNodeInterface<T> | null {
    return this._head;
  }

  public setHead(head: DoubleLinkedListNodeInterface<T> | null): this {
    this._head = head;
    return this;
  }

  public get tail(): DoubleLinkedListNodeInterface<T> | null {
    return this._tail;
  }

  public setTail(tail: DoubleLinkedListNodeInterface<T> | null): this {
    this._tail = tail;
    return this;
  }

  public clear(): this {
    return this.setHead(null)
      .setTail(null)
      .setSize(0);
  }

  public toString(callback?: toStringCallback<T>): string {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  public toArray(): Array<DoubleLinkedListNodeInterface<T>> {
    const nodes = [];

    this.eachFromHead((node) => {
      nodes.push(node);
    });
    return nodes;
  }

  public eachFromHead(callback: eachCallback<T>): void {
    each<T>(this.head, this.size, 'next', callback);
  }

  public eachFromTail(callback: eachCallback<T>): void {
    each<T>(this.tail, this.size, 'previous', callback);
  }

  public fromArray(values: T[]): this {
    values.forEach((value) => this.append(value));
    return this;
  }

  public deleteHead(): null | DoubleLinkedListNodeInterface<T> {
    const deletedHead = this.head;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.setHead(this.head.next);
      this.head.setPrevious(null);
      this.setSize(this.size - 1);
    }

    return deletedHead;
  }

  public deleteTail(): null | DoubleLinkedListNodeInterface<T> {
    const deletedTail = this.tail;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.setTail(this.tail.previous);
      this.tail.setNext(null);
      this.setSize(this.size - 1);
    }

    return deletedTail;
  }

  public find(findParams: FindParams<T>): null | DoubleLinkedListNodeInterface<T> {
    const { value, callback } = findParams;
    let findNode = null;
    if (typeof callback === 'function') {
      this.eachFromHead((node) => {
        if (callback(node.value)) {
          findNode = node;
          return false;
        }
        return true;
      });
    } else {
      this.eachFromHead((node) => {
        if (this.compare.equal(node.value, value)) {
          findNode = node;
          return false;
        }
        return true;
      });
    }

    return findNode;
  }

  public deleteAll(value?: T): null | DoubleLinkedListNodeInterface<T> {
    return this.deleteValueBase(Infinity, value);
  }

  public delete(value?: T): null | DoubleLinkedListNodeInterface<T> {
    return this.deleteValueBase(1, value);
  }

  public deleteIndex(index: number): null | DoubleLinkedListNodeInterface<T> {
    const node = this.get(index);

    if (node === this.head) {
      return this.deleteHead();
    }

    if (node === this.tail) {
      return this.deleteTail();
    }

    if (node) {
      node.next.setPrevious(node.previous);
      node.previous.setNext(node.next);
      this.setSize(this.size - 1);
    }

    return node;
  }

  public get(index: number): null | DoubleLinkedListNodeInterface<T> {
    return get<T>(index, this.size, this.head, this.tail);
  }

  public insert(value: T, index: number): DoubleLinkedListNodeInterface<T> {
    const position = formatIndex(index, this.size);
    if (position <= 0) {
      return this.prepend(value);
    } else if (position >= this.size) {
      return this.append(value);
    }

    const oldPositionNode = this.get(index) as DoubleLinkedListNodeInterface<T>;
    const newPositionNode = new DoubleLinkedListNode(value, oldPositionNode, oldPositionNode.previous);
    oldPositionNode.previous.setNext(newPositionNode);
    oldPositionNode.setPrevious(newPositionNode);
    this.setSize(this.size + 1);
    return newPositionNode;
  }

  public append(value: T): DoubleLinkedListNodeInterface<T> {
    const newNode = new DoubleLinkedListNode(value, null, this.tail);

    if (this.isEmpty()) {
      this.setTail(newNode)
        .setHead(newNode);
    } else {
      this.tail.setNext(newNode);
      this.setTail(newNode);
    }
    this.setSize(this.size + 1);

    return newNode;
  }

  public prepend(value: T): DoubleLinkedListNodeInterface<T> {
    const newNode = new DoubleLinkedListNode(value, this.head);
    if (this.isEmpty()) {
      this.setHead(newNode)
        .setTail(newNode);
    } else {
      this.head.setPrevious(newNode);
      this.setHead(newNode);
    }
    this.setSize(this.size + 1);

    return newNode;
  }

  public reverse(): this {
    const current = this.head;
    this.setHead(this.tail);
    this.setTail(current);
    reverse<T>(current);
    return this;
  }

  public connect(...arg: Array<DoubleLinkedListInterface<T>>): this {
    const values = [];
    arg.forEach((doubleLinkedList) => {
      doubleLinkedList.eachFromHead((node) => {
        values.push(node.value);
      });
    });

    return this.fromArray(values);
  }

  public has(value?: T): boolean {
    return Boolean(this.find({ value }));
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }
}
