import {
  DoubleLinkedList,
  DoubleLinkedListInterface,
} from '../doubleLinkedList';
import { LinkedHasTableInterface } from './types';

function hash(key: unknown, size: number): number {
  if (typeof key === 'number') {
    return (key >>> 0) % size;
  }

  const seed = 131;
  let hash = 0;
  for (const item of String(key)) {
    hash = (hash * seed) + item.charCodeAt(0);
  }

  return hash % size;
}

function compareFunction(a: { key: unknown }, b: { key: unknown }) {
  if (a.key === b.key) {
    return 0;
  }

  return a.key < b.key ? -1 : 1;
}

export class LinkedHasTable<T = unknown, K = unknown> implements LinkedHasTableInterface<T, K> {

  get keys(): T[] {
    return this._keys;
  }

  constructor(size = LinkedHasTable.size) {
    this._buckets = new Array(size).fill(null)
    .map(() => new DoubleLinkedList<{ key: T; value: K }>(compareFunction));
    this._keys = [];
  }

  public static size = 32;

  private get buckets() {
    return this._buckets;
  }

  private readonly _buckets: DoubleLinkedListInterface<{ key: T; value: K }>[];
  private readonly _keys: T[];

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

  public set(key: T, value: K): this {
    const keyHash = hash(key, LinkedHasTable.size);
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
    const keyHash = hash(key, LinkedHasTable.size);
    this.deleteKeys(key);
    const doubleLinkedList = this.buckets[keyHash];
    const node = doubleLinkedList.deleteAll({
      key,
      value: null,
    });

    return node ? node.value.value : null;
  }

  public get(key: T): K | null {
    const doubleLinkedList = this.buckets[hash(key, LinkedHasTable.size)];
    const node = doubleLinkedList.find({value: {key}});

    return node ? node.value.value : null;
  }

  public has(key: T): boolean {
    return this.keyIndex(key) !== -1;
  }
}
