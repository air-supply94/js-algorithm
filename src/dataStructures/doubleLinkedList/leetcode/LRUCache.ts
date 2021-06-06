import { DoubleLinkedList } from '../doubleLinkedList';
import { DoubleLinkedListInterface, DoubleLinkedListNodeInterface } from '../types';

interface LRUCacheItem {
  key: number;
  value: number;
}

export class LRUCache {
  constructor(capacity: number) {
    this.capacity = capacity;
    this.doubleLinkedList = new DoubleLinkedList<LRUCacheItem>();
    this.hashTable = Object.create(null);
  }

  private readonly doubleLinkedList: DoubleLinkedListInterface<LRUCacheItem>;

  private readonly hashTable: {[key: number]: DoubleLinkedListNodeInterface<LRUCacheItem>; } ;

  private readonly capacity: number;

  public get(key: number): number {
    const node = this.hashTable[key];
    if (node) {
      this.doubleLinkedList.deleteNode(node);
      this.doubleLinkedList.prependNode(node);

      return node.value.value;
    } else {
      return -1;
    }
  }

  public put(key: number, value: number): void {
    const node = this.hashTable[key];
    if (node) {
      this.doubleLinkedList.deleteNode(node);
      this.doubleLinkedList.prependNode(node);
      node.value.value = value;
    } else {
      this.hashTable[key] = this.doubleLinkedList.prepend({
        key,
        value,
      });

      if (this.doubleLinkedList.size > this.capacity) {
        delete this.hashTable[this.doubleLinkedList.deleteTail().value.key];
      }
    }
  }
}
