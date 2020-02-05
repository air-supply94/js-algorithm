import { Comparator } from '../../../utils/comparator';

export interface InterfaceHeap<T> {
  fromArray: (value: T[]) => this;
  sort: () => T[];
  getLeftChildIndex: (parentIndex: number) => number;
  getRightChildIndex: (parentIndex: number) => number;
  getParentIndex: (childIndex: number) => number;
  hasParent: (childIndex: number) => boolean;
  hasLeftChild: (parentIndex: number) => boolean;
  hasRightChild: (parentIndex: number) => boolean;
  leftChild: (parentIndex: number) => T;
  rightChild: (parentIndex: number) => T;
  parent: (childIndex: number) => T;
  peek: () => T;
  poll: () => T;
  add: (item: T) => this;
  remove: (item?: any, comparator?: Comparator) => this;
  findIndex: (item?: any, comparator?: Comparator, fromIndex?: number) => number;
  isEmpty: () => boolean;
  toString: () => string;
  up: (startIndex?: number) => this;
  down: (startIndex?: number) => this;
}

export interface InterfaceMinHeap<T> extends InterfaceHeap<T> {
  pairIsInCorrectOrder: (parentElement: T, childElement: T) => boolean;
}

export interface InterfaceMaxHeap<T> extends InterfaceHeap<T> {
  pairIsInCorrectOrder: (parentElement: T, childElement: T) => boolean;
}
