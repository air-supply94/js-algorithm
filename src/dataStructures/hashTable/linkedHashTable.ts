import {
  DoubleLinkedList,
  DoubleLinkedListInterface,
} from '../doubleLinkedList';
import { LinkedHashTableInterface } from './types';
import { BKDRHash } from './utils';

function hash(key: unknown, size: number): number {
  if (typeof key === 'number') {
    return (key % size) >>> 0;
  }

  return BKDRHash(String(key)) % size;
}

function compareFunction(a: { key: unknown }, b: { key: unknown }) {
  if (a.key === b.key) {
    return 0;
  }

  return a.key < b.key ? -1 : 1;
}

export class LinkedHashTable<T = unknown, K = unknown> implements LinkedHashTableInterface<T, K> {
  constructor(size = LinkedHashTable.size) {
    this.buckets = new Array(size).fill(null)
    .map(() => new DoubleLinkedList<{ key: T; value: K }>(compareFunction));
    this.keys = [];
  }

  public static size = 32;

  private readonly buckets: DoubleLinkedListInterface<{ key: T; value: K }>[];

  private keyIndex(key: T): number {
    return this.keys.indexOf(key);
  }

  private addKeys(key: T): void {
    if (this.keyIndex(key) === -1) {
      this.keys.push(key);
    }
  }

  private deleteKeys(key: T): void {
    if (this.keyIndex(key) !== -1) {
      this.keys.splice(this.keyIndex(key), 1);
    }
  }

  public readonly keys: T[];

  public set(key: T, value: K): this {
    const keyHash = hash(key, LinkedHashTable.size);
    this.addKeys(key);
    const doubleLinkedList = this.buckets[keyHash];
    const node = doubleLinkedList.find({
      value: {key},
    });

    if (!node) {
      doubleLinkedList.append({
        key,
        value,
      });
    } else {
      node.value.value = value;
    }

    return this;
  }

  public delete(key: T): K | null {
    const keyHash = hash(key, LinkedHashTable.size);
    this.deleteKeys(key);
    const doubleLinkedList = this.buckets[keyHash];
    const node = doubleLinkedList.deleteAll({
      key,
      value: null,
    });

    return node ? node.value.value : null;
  }

  public get(key: T): K | null {
    const doubleLinkedList = this.buckets[hash(key, LinkedHashTable.size)];
    const node = doubleLinkedList.find({value: {key}});

    return node ? node.value.value : null;
  }

  public has(key: T): boolean {
    return this.keyIndex(key) !== -1;
  }
}
