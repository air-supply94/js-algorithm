import { Comparator } from '../../../../utils/comparator';

export interface BinarySearchTreeNodeInterface<T = unknown> {
  readonly value: T;
  readonly left: BinarySearchTreeNodeInterface<T> | null;
  readonly right: BinarySearchTreeNodeInterface<T> | null;
  readonly parent: BinarySearchTreeNodeInterface<T> | null;
  readonly leftHeight: number;
  readonly rightHeight: number;
  readonly height: number;
  readonly balanceFactor: number;
  readonly uncle: BinarySearchTreeNodeInterface<T> | null;
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
  remove(value: T): boolean;
  findMin(): null | BinarySearchTreeNodeInterface<T>;
  findMax(): null | BinarySearchTreeNodeInterface<T>;
  traversePreOrder(): T[];
  traverseInOrder(): T[];
  traverseAfterOrder(): T[];
  traverseLevelOrder(): T[];
}
