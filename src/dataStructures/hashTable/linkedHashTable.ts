import {
  DoubleLinkedList,
  DoubleLinkedListInterface,
} from '../doubleLinkedList';
import {
  LinkedHashTableInterface,
  LinkedHashTableItemInterface,
} from './types';
import { BKDRHash } from './utils';
import { Comparator } from '../../utils/comparator';

function LinkedListCompare(a: { key: string }, b: { key: string }) {
  if (a.key === b.key) {
    return 0;
  } else if (a.key < b.key) {
    return -1;
  }
  return 1;
}

export class LinkedHashTable<T = unknown> implements LinkedHashTableInterface<T> {
  constructor(size = LinkedHashTable.size) {
    this.LinkedListCompare = new Comparator(LinkedListCompare);
    this.buckets = new Array(size).fill(null)
    .map(() => new DoubleLinkedList<LinkedHashTableItemInterface<T>>(this.LinkedListCompare));
  }

  public static size = 31;

  private readonly LinkedListCompare: Comparator;
  private readonly buckets: DoubleLinkedListInterface<LinkedHashTableItemInterface<T>>[];

  private getInfo(key: string | number): { key: string; hash: number; bucket: DoubleLinkedListInterface<LinkedHashTableItemInterface<T>> } {
    key = String(key);
    const hash = BKDRHash(key);
    const keyHash = hash % LinkedHashTable.size;
    const bucket = this.buckets[keyHash];
    return {
      key,
      hash,
      bucket,
    };
  }

  public set(key: string | number, value: T): T {
    const info = this.getInfo(key);
    const node = info.bucket.find({
      value: {key: info.key},
    });

    if (!node) {
      info.bucket.append({
        key: info.key,
        value,
        hash: info.hash,
      });
    } else {
      node.value.value = value;
    }

    return value;
  }

  public delete(key: string | number): T | null {
    const info = this.getInfo(key);
    const node = info.bucket.deleteAll({
      key: info.key,
      value: null,
      hash: null,
    });

    if (node) {
      return node.value.value;
    }

    return null;
  }

  public get(key: string | number): T | null {
    const info = this.getInfo(key);
    const node = info.bucket.find({value: {key: info.key}});
    return node ? node.value.value : null;
  }

  public has(key: string | number): boolean {
    const info = this.getInfo(key);
    return !!info.bucket.find({value: {key: info.key}});
  }
}
