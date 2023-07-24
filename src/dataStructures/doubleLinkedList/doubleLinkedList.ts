import type { interfaces } from '../../types';
import { Comparator } from '../../utils';

export class DoubleLinkedListNode<T = unknown> implements interfaces.DoubleLinkedListNode<T> {
  constructor(value: T | null, next: interfaces.DoubleLinkedListNode<T> | null = null, previous: interfaces.DoubleLinkedListNode<T> | null = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

  public value: T | null;

  public next: interfaces.DoubleLinkedListNode<T> | null;

  public previous: interfaces.DoubleLinkedListNode<T> | null;
}

export class DoubleLinkedList<T = unknown> implements interfaces.DoubleLinkedList<T> {
  constructor(compare?: interfaces.CompareParams<T>) {
    this.clear();
    this.comparator = new Comparator<T>(compare);
  }

  public readonly comparator: interfaces.Comparator<T>;

  public head: interfaces.DoubleLinkedListNode<T> | null;

  public tail: interfaces.DoubleLinkedListNode<T> | null;

  public size: number;

  public clear(): void {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public toArray(): Array<interfaces.DoubleLinkedListNode<T>> {
    const nodes: Array<interfaces.DoubleLinkedListNode<T>> = [];
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

  public append(value: T): interfaces.DoubleLinkedListNode<T> {
    const tail = new DoubleLinkedListNode(value);
    if (this.isEmpty()) {
      this.tail = tail;
      this.head = tail;
    } else {
      this.tail.next = tail;
      tail.previous = this.tail;
      this.tail = tail;
    }

    this.size++;
    return tail;
  }

  public prepend(value: T): interfaces.DoubleLinkedListNode<T> {
    const head = new DoubleLinkedListNode(value);
    if (this.isEmpty()) {
      this.tail = head;
      this.head = head;
    } else {
      this.head.previous = head;
      head.next = this.head;
      this.head = head;
    }

    this.size++;
    return head;
  }

  public deleteHead(): interfaces.DoubleLinkedListNode<T> | null {
    const deletedNode = this.head;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.head = this.head.next;
      deletedNode.next = null;
      this.head.previous = null;
      this.size--;
    }

    return deletedNode;
  }

  public deleteTail(): interfaces.DoubleLinkedListNode<T> | null {
    const deletedNode = this.tail;
    if (this.size <= 1) {
      this.clear();
    } else {
      this.tail = this.tail.previous;
      deletedNode.previous = null;
      this.tail.next = null;
      this.size--;
    }

    return deletedNode;
  }
}
