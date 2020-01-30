import DoubleLinkedList from '../doubleLinkedList';
import { InterfaceHasTable } from './@types';

export default class HashTable implements InterfaceHasTable {
  constructor(hashTableSize: number = 32) {
    this.buckets = new Array(hashTableSize).fill(null)
    .map(() => new DoubleLinkedList());
    this.keys = {};
  }

  public buckets;
  public keys;

  public hash(key) {
    // @ts-ignore
    const hash: number = [].reduce.call(key, (prev, value) => prev + value.codePointAt(0), 0);
    return hash % this.buckets.length;
  }

  public set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const doubleLinkedList = this.buckets[keyHash];
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

  public delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const doubleLinkedList = this.buckets[keyHash];
    const node = doubleLinkedList.find({
      callback(nodeValue) {
        return nodeValue.key === key;
      },
    });

    if (node) {
      doubleLinkedList.delete(node.value);
    }

    return this;
  }

  public get(key) {
    const doubleLinkedList = this.buckets[this.hash(key)];
    const node = doubleLinkedList.find({
      callback(nodeValue) {
        return nodeValue.key === key;
      },
    });

    return node ? node.value.value : undefined;
  }

  public has(key) {
    return Object.prototype.hasOwnProperty.call(this.keys, key);
  }

  public getKeys() {
    return Object.keys(this.keys);
  }
}
