import { compareFunctionType } from '../../../utils/@types';
import { Comparator } from '../../../utils/comparator';

export interface InterfaceHeap {
  fromArray: (value: any[]) => this;
  sort: () => any[];
  getLeftChildIndex: (parentIndex: number) => number;
  getRightChildIndex: (parentIndex: number) => number;
  getParentIndex: (childIndex: number) => number;
  hasParent: (childIndex: number) => boolean;
  hasLeftChild: (parentIndex: number) => boolean;
  hasRightChild: (parentIndex: number) => boolean;
  leftChild: (parentIndex: number) => any;
  rightChild: (parentIndex: number) => any;
  parent: (childIndex: number) => any;
  peek: () => any;
  poll: () => any;
  add: (item?: any) => this;
  remove: (item?: any, comparator?: Comparator) => this;
  findIndex: (item?: any, comparator?: Comparator, fromIndex?: number) => number;
  isEmpty: () => boolean;
  toString: () => string;
  up: (startIndex?: number) => this;
  down: (startIndex?: number) => this;
}

export interface InterfaceMinHeap extends InterfaceHeap {
  pairIsInCorrectOrder: (parentElement, childElement) => boolean;
}

export interface InterfaceMaxHeap extends InterfaceHeap {
  pairIsInCorrectOrder: (parentElement, childElement) => boolean;
}
