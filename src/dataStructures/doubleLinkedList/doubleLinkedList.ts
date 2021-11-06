import type { compareFunctionType } from '../../utils';
import { Comparator } from '../../utils';

export class DoubleLinkedListNode<T = unknown> {
  constructor(value: T | null, next: DoubleLinkedListNode<T> | null = null, previous: DoubleLinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  public value: T | null;

  public next: DoubleLinkedListNode<T> | null;

  public previous: DoubleLinkedListNode<T> | null;
}

export class DoubleLinkedList<T = unknown> {
  constructor(comparatorFunction?: Comparator | compareFunctionType) {
    this.clear();
    this.compare = new Comparator(comparatorFunction);
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

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public toArray(): Array<DoubleLinkedListNode<T>> {
    const nodes: Array<DoubleLinkedListNode<T>> = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  public fromArray(values: T[]): void {
    for (let i = 0; i < values.length; i++) {
      this.append(values[i]);
    }
  }

  public append(value: T): DoubleLinkedListNode<T> {
    const node = new DoubleLinkedListNode(value, null, this.tail);
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
    return node;
  }

  public prepend(value: T): DoubleLinkedListNode<T> {
    const node = new DoubleLinkedListNode(value, this.head);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.previous = node;
      this.head = node;
    }
    this.size++;
    return node;
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
}
