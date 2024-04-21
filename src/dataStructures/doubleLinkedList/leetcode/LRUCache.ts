import type { interfaces } from '../../../types';
import { DoubleLinkedList } from '../doubleLinkedList';
import { deleteNode } from '../utils';

interface LRUCacheItem {
  key: number;
  value: number;
}

// https://leetcode-cn.com/problems/lru-cache/
// 146
// top100
export class LRUCache {
  constructor(capacity: number) {
    this.capacity = capacity;
    this.doubleLinkedList = new DoubleLinkedList<LRUCacheItem>();
    this.nodeMap = new Map<number, interfaces.DoubleLinkedListNode<LRUCacheItem>>();
  }

  private readonly doubleLinkedList: interfaces.DoubleLinkedList<LRUCacheItem>;

  private readonly nodeMap: Map<number, interfaces.DoubleLinkedListNode<LRUCacheItem>>;

  private readonly capacity: number;

  public get(key: number): number {
    const node = this.nodeMap.get(key);
    if (node) {
      deleteNode(this.doubleLinkedList, node);
      this.doubleLinkedList.prependNode(node);

      return node.value.value;
    } else {
      return -1;
    }
  }

  public put(key: number, value: number): void {
    const node = this.nodeMap.get(key);
    if (node) {
      deleteNode(this.doubleLinkedList, node);
      this.doubleLinkedList.prependNode(node);
      node.value.value = value;
    } else {
      this.nodeMap.set(
        key,
        this.doubleLinkedList.prepend({
          key,
          value,
        }),
      );

      if (this.doubleLinkedList.size > this.capacity) {
        this.nodeMap.delete(this.doubleLinkedList.deleteTail().value.key);
      }
    }
  }
}

/*
class DoubleLinkedListNode<T = unknown> {
  constructor(public value: T) {
  }

  public next: DoubleLinkedListNode<T> = null;

  public previous: DoubleLinkedListNode<T> = null;
}

class DoubleLinkedList <T = unknown> {
  private head: DoubleLinkedListNode<T> = null;

  private tail: DoubleLinkedListNode<T> = null;

  public size = 0;

  public prepend(value: T): DoubleLinkedListNode<T> {
    this.size++;
    const node = new DoubleLinkedListNode(value);

    node.next = this.head;
    if (this.head) {
      this.head.previous = node;
    } else {
      this.tail = node;
    }
    this.head = node;

    return node;
  }

  public deleteTail(): DoubleLinkedListNode<T> {
    const node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.size = 0;
    } else {
      const previous = node.previous;
      previous.next = null;
      node.previous = null;
      this.tail = previous;
      this.size--;
    }

    return node;
  }

  public prependNode(node: DoubleLinkedListNode<T>): void {
    this.size++;
    if (this.head) {
      this.head.previous = node;
    } else {
      this.tail = node;
    }

    node.next = this.head;
    this.head = node;
  }

  public deleteNode(node: DoubleLinkedListNode<T>): void {
    this.size--;

    if (node === this.head) {
      const head = this.head;
      const next = head.next;

      if (next) {
        next.previous = null;
      } else {
        this.tail = null;
      }

      head.next = null;
      this.head = next;
    } else if (node === this.tail) {
      const tail = this.tail;
      const previous = tail.previous;

      if (previous) {
        previous.next = null;
      } else {
        this.head = null;
      }
      tail.previous = null;
      this.tail = previous;
    } else {
      node.previous.next = node.next;
      node.next.previous = node.previous;
      node.next = null;
      node.previous = null;
    }
  }
}

interface LRUCacheItem {
  key: number;
  value: number;
}

// https://leetcode-cn.com/problems/lru-cache/
// 146
// top100
export class LRUCache {
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  private cache: Map<number, DoubleLinkedListNode<LRUCacheItem>> = new Map<number, DoubleLinkedListNode<LRUCacheItem>>();

  private doubleLinkedList: DoubleLinkedList<LRUCacheItem> = new DoubleLinkedList<LRUCacheItem>();

  private readonly capacity: number;

  public get(key: number): number {
    const node = this.cache.get(key);
    if (node) {
      this.doubleLinkedList.deleteNode(node);
      this.doubleLinkedList.prependNode(node);
      return node.value.value;
    } else {
      return -1;
    }
  }

  public put(key: number, value: number): void {
    const node = this.cache.get(key);
    if (node) {
      this.doubleLinkedList.deleteNode(node);
      this.doubleLinkedList.prependNode(node);
      node.value.value = value;
    } else {
      this.cache.set(key, this.doubleLinkedList.prepend({
        key,
        value,
      }));

      if (this.doubleLinkedList.size > this.capacity) {
        this.cache.delete(this.doubleLinkedList.deleteTail().value.key);
      }
    }
  }
}
*/
