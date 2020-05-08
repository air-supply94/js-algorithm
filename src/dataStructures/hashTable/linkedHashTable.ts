import {
  DoubleLinkedList,
  DoubleLinkedListInterface,
  DoubleLinkedListNodeInterface,
} from '../doubleLinkedList';
import {
  LinkedHashTableInterface,
  LinkedHashTableItemInterface,
} from './types';
import { BKDRHash } from './utils';
import { Comparator } from '../../utils/comparator';

function hash(key: unknown): number {
  if (typeof key === 'number' && isFinite(key) && Math.floor(key) === key) {
    return key;
  }

  return BKDRHash(String(key));
}

function compareFunction(a: { key: unknown }, b: { key: unknown }) {
  if (a.key === b.key) {
    return 0;
  }

  return a.key < b.key ? -1 : 1;
}

export class LinkedHashTable<T = unknown, K = unknown> implements LinkedHashTableInterface<T, K> {
  constructor(size = LinkedHashTable.size) {
    this.compare = new Comparator(compareFunction);
    this.buckets = new Array(size).fill(null)
    .map(() => new DoubleLinkedList<LinkedHashTableItemInterface<T, K>>(this.compare));
  }

  public static size = 31;

  private readonly compare: Comparator;
  private readonly buckets: DoubleLinkedListInterface<LinkedHashTableItemInterface<T, K>>[];

  private getNode(key: T): DoubleLinkedListNodeInterface<{ key: T; value: K }> | null {
    const doubleLinkedList = this.buckets[hash(key) % LinkedHashTable.size];
    return doubleLinkedList.find({value: {key}});
  }

  public set(key: T, value: K): this {
    const hashCode = hash(key);
    const keyHash = hashCode % LinkedHashTable.size;
    const doubleLinkedList = this.buckets[keyHash];
    const node = doubleLinkedList.find({
      value: {key},
    });

    if (!node) {
      doubleLinkedList.append({
        key,
        value,
        hash: hashCode,
      });
    } else {
      node.value.value = value;
    }

    return this;
  }

  public delete(key: T): K | null {
    const hashCode = hash(key);
    const keyHash = hashCode % LinkedHashTable.size;
    const doubleLinkedList = this.buckets[keyHash];
    const node = doubleLinkedList.deleteAll({
      key,
      value: null,
      hash: null,
    });

    if (node) {
      return node.value.value;
    }

    return null;
  }

  public get(key: T): K | null {
    const node = this.getNode(key);
    return node ? node.value.value : null;
  }

  public has(key: T): boolean {
    return !!this.getNode(key);
  }
}
