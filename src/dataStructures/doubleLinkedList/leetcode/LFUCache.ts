import type { interfaces } from '../../../types';
import { DoubleLinkedList } from '../doubleLinkedList';
import { deleteNode } from '../utils';

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
    this.valueMap = new Map<number, interfaces.DoubleLinkedListNode<LFUCacheItem>>();
    this.countMap = new Map<number, interfaces.DoubleLinkedList<LFUCacheItem>>();
    this.minCount = 0;
  }

  private minCount: number;

  private readonly countMap: Map<number, interfaces.DoubleLinkedList<LFUCacheItem>>;

  private readonly valueMap: Map<number, interfaces.DoubleLinkedListNode<LFUCacheItem>>;

  private readonly capacity: number;

  private commonExistNodeHandle(node: interfaces.DoubleLinkedListNode<LFUCacheItem>): void {
    const oldCount = node.value.count;
    const newCount = oldCount + 1;
    node.value.count = newCount;

    deleteNode(this.countMap.get(oldCount), node);
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
    if (this.capacity <= 0) {
      return;
    }

    const node = this.valueMap.get(key);

    if (node) {
      this.commonExistNodeHandle(node);
      node.value.value = value;
    } else {
      if (!this.countMap.has(1)) {
        this.countMap.set(1, new DoubleLinkedList<LFUCacheItem>());
      }

      this.valueMap.set(
        key,
        this.countMap.get(1).prepend({
          value,
          key,
          count: 1,
        }),
      );

      if (this.valueMap.size > this.capacity) {
        this.valueMap.delete(this.countMap.get(this.minCount).deleteTail().value.key);
      }

      this.minCount = 1;
    }
  }
}
