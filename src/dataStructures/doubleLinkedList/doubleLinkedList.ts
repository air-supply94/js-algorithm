import { Comparator, compareFunctionType } from '../../utils';
import { eachCallback, FindParams, toStringCallback } from './types';
import { each, formatIndex, get } from './utils';

export class DoubleLinkedListNode<T = unknown> {
  constructor(value: T | null, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  public value: T | null;

  public next: DoubleLinkedListNode<T> | null;

  public previous: DoubleLinkedListNode<T> | null;

  public toString(callback?: toStringCallback<T>): string {
    return typeof callback === 'function' ? callback(this.value) : String(this.value);
  }
}

export class DoubleLinkedList<T = unknown> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this.clear();
    this.compare = new Comparator(comparatorFunction);
  }

  private deleteValueBase(count: number, value?: T): null | DoubleLinkedListNode<T> {
    let deleteCount = 0;
    let deletedNode = null;
    while (deleteCount < count && this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.size -= 1;
      ++deleteCount;
    }

    if (this.head) {
      this.head.previous = null;
    }

    let currentNode = this.head;
    if (currentNode) {
      while (deleteCount < count && currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next;
          ++deleteCount;
          this.size -= 1;

          if (currentNode.next.next) {
            currentNode.next.next.previous = currentNode;
          }
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (!currentNode || !currentNode.next) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  public readonly compare: Comparator;

  public head: DoubleLinkedListNode<T> | null;

  public tail: DoubleLinkedListNode<T> | null;

  public size: number;

  public clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public toString(callback?: toStringCallback<T>): string {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  public toArray(): Array<DoubleLinkedListNode<T>> {
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

  public deleteHead(): null | DoubleLinkedListNode<T> {
    const deletedNode = this.head;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.head = this.head.next;
      this.head.previous = null;
      this.size -= 1;
    }

    return deletedNode;
  }

  public deleteTail(): null | DoubleLinkedListNode<T> {
    const deletedNode = this.tail;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.size -= 1;
    }

    return deletedNode;
  }

  public find(findParams: FindParams<T>): null | DoubleLinkedListNode<T> {
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

  public deleteAll(value?: T): null | DoubleLinkedListNode<T> {
    return this.deleteValueBase(Infinity, value);
  }

  public delete(value?: T): null | DoubleLinkedListNode<T> {
    return this.deleteValueBase(1, value);
  }

  public deleteNode(node: DoubleLinkedListNode<T>): DoubleLinkedListNode<T> {
    if (node === this.head) {
      return this.deleteHead();
    } else if (node === this.tail) {
      return this.deleteTail();
    } else {
      node.next.previous = node.previous;
      node.previous.next = node.next;
      node.next = null;
      node.previous = null;
      this.size -= 1;
      return node;
    }
  }

  public deleteIndex(index: number): null | DoubleLinkedListNode<T> {
    const deleteNode = this.get(index);
    if (!deleteNode) {
      return null;
    }

    if (deleteNode === this.head) {
      return this.deleteHead();
    } else if (deleteNode === this.tail) {
      return this.deleteTail();
    } else {
      deleteNode.next.previous = deleteNode.previous;
      deleteNode.previous.next = deleteNode.next;
      this.size -= 1;
      return deleteNode;
    }
  }

  public get(index: number): null | DoubleLinkedListNode<T> {
    return get<T>(index, this.size, this.head, this.tail);
  }

  public insert(value: T, index: number): DoubleLinkedListNode<T> {
    const position = formatIndex(index, this.size);
    if (position <= 0) {
      return this.prepend(value);
    } else if (position >= this.size) {
      return this.append(value);
    } else {
      const oldPositionNode = this.get(position)!;
      const newPositionNode = new DoubleLinkedListNode<T>(value, oldPositionNode, oldPositionNode.previous);
      oldPositionNode.previous.next = newPositionNode;
      oldPositionNode.previous = newPositionNode;
      this.size += 1;
      return newPositionNode;
    }
  }

  public append(value: T): DoubleLinkedListNode<T> {
    const node = new DoubleLinkedListNode(value, null, this.tail);
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;

      this.size++;
      return node;
    } else {
      this.tail.next = node;
      this.tail = node;

      this.size++;
      return node;
    }
  }

  public prepend(value: T): DoubleLinkedListNode<T> {
    const node = new DoubleLinkedListNode(value, this.head);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;

      this.size++;
      return node;
    } else {
      this.head.previous = node;
      this.head = node;

      this.size++;
      return node;
    }
  }

  public has(value?: T): boolean {
    return Boolean(this.find({ value }));
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }
}
