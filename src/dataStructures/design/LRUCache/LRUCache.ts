import { DoubleLinkedList } from '../../doubleLinkedList';
import { DoubleLinkedListInterface, DoubleLinkedListNodeInterface } from '../../doubleLinkedList/types';

interface LRUCacheItem {
  key: number;
  value: number;
}

export class LRUCache {
  constructor(capacity: number) {
    this.capacity = capacity;
    this.doubleLinkedList = new DoubleLinkedList<LRUCacheItem>();
    this.nodeMap = new Map<number, DoubleLinkedListNodeInterface<LRUCacheItem>>();
  }

  private readonly doubleLinkedList: DoubleLinkedListInterface<LRUCacheItem> ;

  private readonly nodeMap: Map<number, DoubleLinkedListNodeInterface<LRUCacheItem>>;

  private readonly capacity: number;

  public get(key: number): number {
    const node = this.nodeMap.get(key);
    if (node) {
      this.doubleLinkedList.deleteNode(node);
      this.doubleLinkedList.prependNode(node);

      return node.value.value;
    } else {
      return -1;
    }
  }

  public put(key: number, value: number): void {
    const node = this.nodeMap.get(key);
    if (node) {
      this.doubleLinkedList.deleteNode(node);
      this.doubleLinkedList.prependNode(node);
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
