import { DoubleLinkedList } from '../doubleLinkedList';
import { DoubleLinkedListInterface, DoubleLinkedListNodeInterface } from '../types';

interface LFUCacheItem {
  key: number;
  value: number;
  count: number;
}

export class LFUCache {
  // 0 or 1 is LRUCache
  constructor(capacity: number) {
    this.capacity = capacity;
    this.valueHashTable = {};
    this.countHashTable = {};
    this.minCount = 0;
    this.size = 0;
  }

  private minCount: number;

  private size: number;

  private readonly countHashTable: {[key: number]: DoubleLinkedListInterface<LFUCacheItem>; };

  private readonly valueHashTable: {[key: number]: DoubleLinkedListNodeInterface<LFUCacheItem>; };

  private readonly capacity: number;

  private commonExistNodeHandle(node: DoubleLinkedListNodeInterface<LFUCacheItem>): void {
    const oldCount = node.value.count;
    const newCount = oldCount + 1;
    node.value.count = newCount;

    this.countHashTable[oldCount].deleteNode(node);
    if (!this.countHashTable[newCount]) {
      this.countHashTable[newCount] = new DoubleLinkedList<LFUCacheItem>();
    }
    this.countHashTable[newCount].prependNode(node);

    if (this.minCount === oldCount && this.countHashTable[oldCount].isEmpty()) {
      this.minCount = newCount;
    }
  }

  public get(key: number): number {
    const node = this.valueHashTable[key];
    if (node) {
      this.commonExistNodeHandle(node);
      return node.value.value;
    } else {
      return -1;
    }
  }

  public put(key: number, value: number): void {
    const node = this.valueHashTable[key];
    if (node) {
      this.commonExistNodeHandle(node);
    } else {
      if (!this.countHashTable[1]) {
        this.countHashTable[1] = new DoubleLinkedList<LFUCacheItem>();
      }

      this.countHashTable[1].prepend({
        value,
        key,
        count: 1,
      });

      this.valueHashTable[key] = this.countHashTable[1].head;
      this.size++;

      if (this.size > this.capacity) {
        delete this.valueHashTable[this.countHashTable[this.minCount].deleteTail().value.key];
        this.size--;
      }

      this.minCount = 1;
    }
  }
}
