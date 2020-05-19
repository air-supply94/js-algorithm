import { Comparator } from '../../../utils';

export interface HeapInterface<T = unknown> {
  fromArray: (value: T[]) => this;
  sort: () => T[];
  peek: () => T | undefined;
  poll: () => T | undefined;
  add: (item: T) => this;
  removeAll: (item: T, comparator?: Comparator) => T [];
  remove: (item: T, comparator?: Comparator) => T [];
  findIndex: (item: T, comparator?: Comparator, fromIndex?: number) => number;
  isEmpty: () => boolean;
  toString: () => string;
  up: (startIndex?: number) => this;
  down: (startIndex?: number) => this;
}

export interface MinHeapInterface<T = unknown> extends HeapInterface<T> {
  pairIsInCorrectOrder: (parentElement: T, childElement: T) => boolean;
}

export interface MaxHeapInterface<T = unknown> extends HeapInterface<T> {
  pairIsInCorrectOrder: (parentElement: T, childElement: T) => boolean;
}
