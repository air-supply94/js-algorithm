import { DoubleLinkedListNode } from './doubleLinkedListNode';
import {
  Comparator,
  compareFunctionType,
} from '../../utils';
import {
  DoubleLinkedListInterface,
  DoubleLinkedListNodeInterface,
} from './types';

export * from './types';

export class DoubleLinkedList<T = unknown> implements DoubleLinkedListInterface<T> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this.clear();
    this._compare = new Comparator(comparatorFunction);
  }

  private _compare: Comparator;
  private _head: DoubleLinkedListNodeInterface<T> | null;
  private _tail: DoubleLinkedListNodeInterface<T> | null;
  private _size: number;

  private setSize(size: number): this {
    this._size = size;
    return this;
  }

  private setHead(head: DoubleLinkedListNodeInterface<T> | null): this {
    this._head = head;
    return this;
  }

  private setTail(tail: DoubleLinkedListNodeInterface<T> | null): this {
    this._tail = tail;
    return this;
  }

  private deleteBase(count: number, value?: T): null | DoubleLinkedListNodeInterface<T> {
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

  get compare() {
    return this._compare;
  }

  get size(): number {
    return this._size;
  }

  get head(): DoubleLinkedListNodeInterface<T> | null {
    return this._head;
  }

  get tail(): DoubleLinkedListNodeInterface<T> | null {
    return this._tail;
  }

  public clear(): this {
    return this.setHead(null)
    .setTail(null)
    .setSize(0);
  }

  public toString(callback?: (value: T) => string): string {
    return this.toArray()
    .map(node => node.toString(callback))
    .toString();
  }

  public toArray(): DoubleLinkedListNodeInterface<T>[] {
    const nodes = [];
    this.eachFromHead(node => {
      nodes.push(node);
    });
    return nodes;
  }

  public eachFromHead(callback: (node: DoubleLinkedListNodeInterface<T>) => void | boolean): this {
    let currentNode = this.head;
    while (currentNode) {
      if (callback(currentNode) === false) {
        break;
      }
      currentNode = currentNode.next;
    }

    return this;
  }

  public eachFromTail(callback: (node: DoubleLinkedListNodeInterface<T>) => void | boolean): this {
    let currentNode = this.tail;
    while (currentNode) {
      if (callback(currentNode) === false) {
        break;
      }
      currentNode = currentNode.previous;
    }
    return this;
  }

  public fromArray(values: T[]): this {
    values.forEach(value => this.append(value));
    return this;
  }

  public deleteHead(): null | DoubleLinkedListNodeInterface<T> {
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

  public deleteTail(): null | DoubleLinkedListNodeInterface<T> {
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

  public find(findParams: { value?: T; callback?: (node: T) => boolean }): null | DoubleLinkedListNodeInterface<T> {
    const {value, callback = {}} = findParams;
    let findNode = null;
    this.eachFromHead(node => {
      if ((typeof callback === 'function' && callback(node.value)) || this.compare.equal(node.value, value)) {
        findNode = node;
        return false;
      }
      return true;
    });

    return findNode;
  }

  public deleteAll(value?: T): null | DoubleLinkedListNodeInterface<T> {
    return this.deleteBase(Infinity, value);
  }

  public delete(value?: T): null | DoubleLinkedListNodeInterface<T> {
    return this.deleteBase(1, value);
  }

  public get(index: number): null | DoubleLinkedListNodeInterface<T> {
    const position = index >>> 0;
    let i = 0;
    if (this.size && position >= this.size) {
      return null;
    }

    let findNode = null;
    const middle = this.size / 2 >>> 0;
    if (this.size > 10 && position >= middle) {
      this.eachFromTail(node => {
        if (this.size - 1 - i === position) {
          findNode = node;
          return false;
        }
        ++i;
        return true;
      });
    } else {
      this.eachFromHead(node => {
        if (i === position) {
          findNode = node;
          return false;
        }
        i++;
        return true;
      });
    }
    return findNode;
  }

  public insert(value: T, index: number): this {
    const position = index >>> 0;
    if (position === 0) {
      return this.prepend(value);
    } else if (position >= this.size) {
      return this.append(value);
    }

    const oldPositionNode = this.get(index) as DoubleLinkedListNodeInterface<T>;
    const newPositionNode = new DoubleLinkedListNode(value, oldPositionNode, oldPositionNode.previous);
    oldPositionNode.previous.setNext(newPositionNode);
    oldPositionNode.setPrevious(newPositionNode);
    return this;
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
    let current = this.head;
    this.setHead(this.tail);
    this.setTail(current);
    let previous: DoubleLinkedListNodeInterface<T> = null;
    let next: DoubleLinkedListNodeInterface<T> = null;
    while (current) {
      next = current.next;
      current.setNext(previous)
      .setPrevious(next);
      previous = current;
      current = next;
    }
    return this;
  }

  public connect(...arg: DoubleLinkedListInterface<T>[]): this {
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
    return this.size === 0;
  }
}
