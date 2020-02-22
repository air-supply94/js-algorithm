import { DoubleLinkedList } from '../doubleLinkedList';
import { InterfaceHasTable } from './@types';

export class HashTable<T> implements InterfaceHasTable<T> {
  constructor(hashTableSize: number = 32) {
    this._buckets = new Array(hashTableSize).fill(null)
    .map(() => new DoubleLinkedList<{ key: string; value: T }>());
    this._keys = {};
  }

  private _buckets: DoubleLinkedList<{ key: string; value: T }>[];
  private _keys: { [index: string]: number };

  private hash(key: string): number {
    return [].reduce.call(key, (prev, value) => prev + value.codePointAt(0), 0) % this._buckets.length;
  }

  public set(key: string, value: T): this {
    const keyHash = this.hash(key);
    this._keys[key] = keyHash;
    const doubleLinkedList = this._buckets[keyHash];
    const node = doubleLinkedList.find({
      callback(nodeValue) {
        return nodeValue.key === key;
      },
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

  public delete(key: string): T {
    const keyHash = this.hash(key);
    delete this._keys[key];
    const doubleLinkedList = this._buckets[keyHash];
    const node = doubleLinkedList.find({
      callback(nodeValue) {
        return nodeValue.key === key;
      },
    });

    if (node) {
      doubleLinkedList.delete(node.value);
    }

    return node ? node.value.value : null;
  }

  public get(key: string): T | null {
    const doubleLinkedList = this._buckets[this.hash(key)];
    const node = doubleLinkedList.find({
      callback(nodeValue) {
        return nodeValue.key === key;
      },
    });

    return node ? node.value.value : null;
  }

  public has(key: string): boolean {
    return Object.prototype.hasOwnProperty.call(this._keys, key);
  }

  public getKeys(): string[] {
    return Object.keys(this._keys);
  }
}
