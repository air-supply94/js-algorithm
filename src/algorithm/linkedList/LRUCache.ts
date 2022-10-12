import type { DoubleLinkedListNode } from 'src/dataStructures/doubleLinkedList/doubleLinkedList';
import { DoubleLinkedList } from 'src/dataStructures/doubleLinkedList/doubleLinkedList';
import { deleteNode, prependNode } from '../../dataStructures/doubleLinkedList/utils';

interface LRUCacheItem {
  key: number;
  value: number;
}

// https://leetcode-cn.com/problems/lru-cache/
// 146
export class LRUCache {
  constructor(capacity: number) {
    this.capacity = capacity;
    this.doubleLinkedList = new DoubleLinkedList<LRUCacheItem>();
    this.nodeMap = new Map<number, DoubleLinkedListNode<LRUCacheItem>>();
  }

  private readonly doubleLinkedList: DoubleLinkedList<LRUCacheItem>;

  private readonly nodeMap: Map<number, DoubleLinkedListNode<LRUCacheItem>>;

  private readonly capacity: number;

  public get(key: number): number {
    const node = this.nodeMap.get(key);
    if (node) {
      deleteNode(this.doubleLinkedList, node);
      prependNode(this.doubleLinkedList, node);

      return node.value.value;
    } else {
      return -1;
    }
  }

  public put(key: number, value: number): void {
    const node = this.nodeMap.get(key);
    if (node) {
      deleteNode(this.doubleLinkedList, node);
      prependNode(this.doubleLinkedList, node);
      node.value.value = value;
    } else {
      this.nodeMap.set(key, this.doubleLinkedList.prepend({
        key,
        value,
      }));

      if (this.doubleLinkedList.size > this.capacity) {
        this.nodeMap.delete(this.doubleLinkedList.deleteTail().value.key);
      }
    }
  }
}
