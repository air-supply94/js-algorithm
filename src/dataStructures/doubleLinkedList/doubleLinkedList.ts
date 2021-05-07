import { Comparator, compareFunctionType } from '../../utils';
import { DoubleLinkedListNode } from './doubleLinkedListNode';
import { DoubleLinkedListInterface, DoubleLinkedListNodeInterface, eachCallback, FindParams, toStringCallback } from './types';
import { reverseBetween, get, each, formatIndex, reverseBase } from './utils';
import { sort } from './utils/sort';

export class DoubleLinkedList<T = unknown> implements DoubleLinkedListInterface<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this.clear();
    this.compare = new Comparator(comparatorFunction);
  }

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
          ++deleteCount;
          this.setSize(this.size - 1);

          if (currentNode.next.next) {
            currentNode.next.next.setPrevious(currentNode);
          }
          currentNode.setNext(currentNode.next.next);
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (!currentNode || !currentNode.next) {
      this.setTail(currentNode);
    }

    // unnecessary
    // if (this.tail) {
    //   this.tail.setNext(null);
    // }

    return deletedNode;
  }

  public readonly compare: Comparator;

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
    const deletedNode = this.head;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.setHead(this.head.next);
      this.head.setPrevious(null);
      this.setSize(this.size - 1);
    }

    return deletedNode;
  }

  public deleteTail(): null | DoubleLinkedListNodeInterface<T> {
    const deletedNode = this.tail;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.setTail(this.tail.previous);
      this.tail.setNext(null);
      this.setSize(this.size - 1);
    }

    return deletedNode;
  }

  public find(findParams: FindParams<T>): null | DoubleLinkedListNodeInterface<T> {
    const {
      value,
      callback,
    } = findParams;
    let findNode = null;
    this.eachFromHead((node) => {
      if (typeof callback === 'function') {
        if (callback(node.value) === true) {
          findNode = node;
          return false;
        } else {
          return true;
        }
      } else {
        if (this.compare.equal(node.value, value)) {
          findNode = node;
          return false;
        } else {
          return true;
        }
      }
    });
    return findNode;
  }

  public deleteAll(value?: T): null | DoubleLinkedListNodeInterface<T> {
    return this.deleteValueBase(Infinity, value);
  }

  public delete(value?: T): null | DoubleLinkedListNodeInterface<T> {
    return this.deleteValueBase(1, value);
  }

  public deleteIndex(index: number): null | DoubleLinkedListNodeInterface<T> {
    const deleteNode = this.get(index);
    if (!deleteNode) {
      return null;
    }

    if (deleteNode === this.head) {
      return this.deleteHead();
    } else if (deleteNode === this.tail) {
      return this.deleteTail();
    } else {
      deleteNode.next.setPrevious(deleteNode.previous);
      deleteNode.previous.setNext(deleteNode.next);
      this.setSize(this.size - 1);
      return deleteNode;
    }
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
    } else {
      const oldPositionNode = this.get(position)!;
      const newPositionNode = new DoubleLinkedListNode<T>(value, oldPositionNode, oldPositionNode.previous);
      oldPositionNode.previous.setNext(newPositionNode);
      oldPositionNode.setPrevious(newPositionNode);
      this.setSize(this.size + 1);
      return newPositionNode;
    }
  }

  public append(value: T): DoubleLinkedListNodeInterface<T> {
    const node = new DoubleLinkedListNode(value, null, this.tail);

    if (this.isEmpty()) {
      this.setTail(node)
        .setHead(node);
    } else {
      this.tail.setNext(node);
      this.setTail(node);
    }

    this.setSize(this.size + 1);
    return node;
  }

  public prepend(value: T): DoubleLinkedListNodeInterface<T> {
    const node = new DoubleLinkedListNode(value, this.head);

    if (this.isEmpty()) {
      this.setHead(node)
        .setTail(node);
    } else {
      this.head.setPrevious(node);
      this.setHead(node);
    }

    this.setSize(this.size + 1);
    return node;
  }

  public reverse(): this {
    const head = this.head;
    const tail = this.tail;
    reverseBase<T>(head);

    return this.setHead(tail)
      .setTail(head);
  }

  public reverseBetween(m = 1, n = this.size): this {
    const head = reverseBetween<T>(this.head, m, n);
    let tail = this.tail;
    while (tail && tail.next) {
      tail = tail.next;
    }

    return this.setHead(head)
      .setTail(tail);
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

  public sort(): this {
    sort<T>(this.head, this.compare);

    let head = this.head;
    let tail = this.head;
    while (head && head.previous) {
      head = head.previous;
    }
    while (tail && tail.next) {
      tail = tail.next;
    }

    return this.setHead(head)
      .setTail(tail);
  }
}
