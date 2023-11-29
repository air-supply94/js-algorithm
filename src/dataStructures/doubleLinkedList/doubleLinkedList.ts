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
    return this.appendNode(new DoubleLinkedListNode(value));
  }

  public appendNode(node: interfaces.DoubleLinkedListNode<T>): interfaces.DoubleLinkedListNode<T> {
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
      node.next = null;
      node.previous = null;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      node.next = null;
      this.tail = node;
    }

    this.size++;
    return node;
  }

  public prepend(value: T): interfaces.DoubleLinkedListNode<T> {
    return this.prependNode(new DoubleLinkedListNode(value));
  }

  public prependNode(node: interfaces.DoubleLinkedListNode<T>): interfaces.DoubleLinkedListNode<T> {
    if (this.isEmpty()) {
      this.tail = node;
      this.head = node;
      node.next = null;
      node.previous = null;
    } else {
      this.head.previous = node;
      node.next = this.head;
      node.previous = null;
      this.head = node;
    }

    this.size++;
    return node;
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
