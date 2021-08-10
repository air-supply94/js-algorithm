import { deleteNode, DoubleLinkedList, DoubleLinkedListNode, prependNode } from '../simple/doubleLinkedList';

interface LFUCacheItem {
  key: number;
  value: number;
  count: number;
}

// https://leetcode-cn.com/problems/lfu-cache/
// 460
export class LFUCache {
  constructor(capacity: number) {
    this.capacity = capacity;
    this.valueMap = new Map<number, DoubleLinkedListNode<LFUCacheItem>>();
    this.countMap = new Map<number, DoubleLinkedList<LFUCacheItem>>();
    this.minCount = 0;
    this.size = 0;
  }

  private minCount: number;

  private size: number;

  private readonly countMap: Map<number, DoubleLinkedList<LFUCacheItem>>;

  private readonly valueMap: Map<number, DoubleLinkedListNode<LFUCacheItem>>;

  private readonly capacity: number;

  private commonExistNodeHandle(node: DoubleLinkedListNode<LFUCacheItem>): void {
    const oldCount = node.val.count;
    const newCount = oldCount + 1;
    node.val.count = newCount;

    if (!this.countMap.has(newCount)) {
      this.countMap.set(newCount, new DoubleLinkedList<LFUCacheItem>());
    }
    deleteNode(this.countMap.get(oldCount), node);
    prependNode(this.countMap.get(newCount), node);

    if (this.minCount === oldCount && this.countMap.get(oldCount)
      .isEmpty()) {
      this.minCount = newCount;
    }
  }

  public get(key: number): number {
    const node = this.valueMap.get(key);
    if (node) {
      this.commonExistNodeHandle(node);
      return node.val.value;
    } else {
      return -1;
    }
  }

  public put(key: number, value: number): void {
    if (this.capacity <= 0) {
      return;
    }

    const node = this.valueMap.get(key);

    if (node) {
      this.commonExistNodeHandle(node);
      node.val.value = value;
    } else {
      if (!this.countMap.has(1)) {
        this.countMap.set(1, new DoubleLinkedList<LFUCacheItem>());
      }

      this.valueMap.set(key, this.countMap.get(1)
        .prepend({
          value,
          key,
          count: 1,
        }));

      this.size++;
      if (this.size > this.capacity) {
        this.valueMap.delete(this.countMap.get(this.minCount)
          .deleteTail().val.key);
        this.size--;
      }

      this.minCount = 1;
    }
  }
}
