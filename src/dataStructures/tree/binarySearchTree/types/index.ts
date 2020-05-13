import { Comparator } from '../../../../utils/comparator';

export type traverseCallback<T = unknown> = (node: BinarySearchTreeNodeInterface<T>) => void | boolean;

export interface BinarySearchTreeNodeInterface<T = unknown> {
  readonly value: T;
  readonly left: BinarySearchTreeNodeInterface<T> | null;
  readonly right: BinarySearchTreeNodeInterface<T> | null;
  readonly parent: BinarySearchTreeNodeInterface<T> | null;
  setValue(value: T): this;
  setParent(parent: null | BinarySearchTreeNodeInterface<T>): this;
  setLeft(node: BinarySearchTreeNodeInterface<T> | null): this;
  setRight(node: BinarySearchTreeNodeInterface<T> | null): this;
  removeChild(nodeToRemove: BinarySearchTreeNodeInterface<T>): boolean;
  replaceChild(nodeToReplace: BinarySearchTreeNodeInterface<T>, replacementNode: BinarySearchTreeNodeInterface<T>): boolean;
}

export interface BinarySearchTreeInterface<T = unknown> {
  readonly comparator: Comparator;
  readonly root: BinarySearchTreeNodeInterface<T> | null;
  setRoot(root: BinarySearchTreeNodeInterface<T> | null): this;
  insert(value: T): null | BinarySearchTreeNodeInterface<T>;
  find(value: T): null | BinarySearchTreeNodeInterface<T>;
  contains(value: T): boolean;
  remove(value: T): BinarySearchTreeNodeInterface<T> | null;
  findMin(): null | BinarySearchTreeNodeInterface<T>;
  findMax(): null | BinarySearchTreeNodeInterface<T>;
  traversePreOrder(): T[];
  traversePreOrderCallback(callback: traverseCallback<T>): void;
  traverseInOrder(): T[];
  traverseInOrderCallback(callback: traverseCallback<T>): void;
  traverseAfterOrder(): T[];
  traverseAfterOrderCallback(callback: traverseCallback<T>): void;
  traverseLevelOrder(): T[];
  traverseLevelOrderCallback(callback: traverseCallback<T>): void;
}
