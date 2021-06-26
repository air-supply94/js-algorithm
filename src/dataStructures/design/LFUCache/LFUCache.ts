import { DoubleLinkedList } from '../../doubleLinkedList';
import { DoubleLinkedListInterface, DoubleLinkedListNodeInterface } from '../../doubleLinkedList/types';

interface LFUCacheItem {
  key: number;
  value: number;
  count: number;
}

export class LFUCache {
  // 0 or 1 is LRUCache
  constructor(capacity: number) {
    this.capacity = capacity;
    this.valueMap = new Map<number, DoubleLinkedListNodeInterface<LFUCacheItem>>();
    this.countMap = new Map<number, DoubleLinkedListInterface<LFUCacheItem>>();
    this.minCount = 0;
    this.size = 0;
  }

  private minCount: number;

  private size: number;

  private readonly countMap: Map<number, DoubleLinkedListInterface<LFUCacheItem>>;

  private readonly valueMap: Map<number, DoubleLinkedListNodeInterface<LFUCacheItem>>;

  private readonly capacity: number;

  private commonExistNodeHandle(node: DoubleLinkedListNodeInterface<LFUCacheItem>): void {
    const oldCount = node.value.count;
    const newCount = oldCount + 1;
    node.value.count = newCount;

    this.countMap.get(oldCount).deleteNode(node);
    if (!this.countMap.has(newCount)) {
      this.countMap.set(newCount, new DoubleLinkedList<LFUCacheItem>());
    }
    this.countMap.get(newCount).prependNode(node);

    if (this.minCount === oldCount && this.countMap.get(oldCount).isEmpty()) {
      this.minCount = newCount;
    }
  }

  public get(key: number): number {
    const node = this.valueMap.get(key);
    if (node) {
      this.commonExistNodeHandle(node);
      return node.value.value;
    } else {
      return -1;
    }
  }

  public put(key: number, value: number): void {
    const node = this.valueMap.get(key);
    if (node) {
      this.commonExistNodeHandle(node);
      node.value.value = value;
    } else {
      if (!this.countMap.has(1)) {
        this.countMap.set(1, new DoubleLinkedList<LFUCacheItem>());
      }

      this.countMap.get(1).prepend({
        value,
        key,
        count: 1,
      });

      this.valueMap.set(key, this.countMap.get(1).head);
      this.size++;

      if (this.size > this.capacity) {
        this.valueMap.delete(this.countMap.get(this.minCount).deleteTail().value.key);
        this.size--;
      }

      this.minCount = 1;
    }
  }
}
