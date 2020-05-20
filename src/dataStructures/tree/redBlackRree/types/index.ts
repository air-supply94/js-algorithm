import {
  BinarySearchTreeInterface,
  BinarySearchTreeNodeInterface,
  traverseCallback,
} from '../../binarySearchTree/types';
import { Comparator } from '../../../../utils/comparator';

export type RedBlackTreeColor = 'red' | 'black';
export type CompleteRedBlackTreeNode<T = unknown> = BinarySearchTreeNodeInterface<RedBlackTreeNodeInterface<T>>;

export interface RedBlackTreeNodeInterface<T = unknown> {
  readonly value: T;
  readonly isRed: boolean;
  readonly isBlack: boolean;
  color: RedBlackTreeColor;
  setColor(color: RedBlackTreeColor): this;
  setValue(value: T): this;
  makeRed(): this;
  makeBlack(): this;
}

export interface RedBlackTreeInterface<T = unknown> {
  readonly comparator: Comparator;
  readonly root: CompleteRedBlackTreeNode<T> | null;
  binarySearchTree: BinarySearchTreeInterface<RedBlackTreeNodeInterface<T>>;
  setRoot(root: CompleteRedBlackTreeNode<T> | null): this;
  find(value: T): null | CompleteRedBlackTreeNode<T>;
  findMin(): null | CompleteRedBlackTreeNode<T>;
  findMax(): null | CompleteRedBlackTreeNode<T>;
  traversePreOrder(): T[];
  traversePreOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void;
  traverseInOrder(): T[];
  traverseInOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void;
  traverseAfterOrder(): T[];
  traverseAfterOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void;
  traverseLevelOrder(): T[];
  traverseLevelOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void;
  contains(value: T): boolean;
  insert(value: T): CompleteRedBlackTreeNode<T> | null;
  remove(value: T): CompleteRedBlackTreeNode<T> | null;
}
