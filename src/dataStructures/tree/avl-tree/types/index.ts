import {
  BinarySearchTreeInterface,
  BinarySearchTreeNodeInterface,
} from '../../binary-search-tree/types';

export interface AvlTreeInterface<T = unknown> extends Omit<BinarySearchTreeInterface<T>, 'setRoot' | 'comparator'> {
  readonly binarySearchTree: BinarySearchTreeInterface<T>;
  balance(node: BinarySearchTreeNodeInterface<T>): this;
  rotateLeftLeft(rootNode: BinarySearchTreeNodeInterface<T>): this;
  rotateLeftRight(rootNode: BinarySearchTreeNodeInterface<T>): this;
  rotateRightLeft(rootNode: BinarySearchTreeNodeInterface<T>): this;
  rotateRightRight(rootNode: BinarySearchTreeNodeInterface<T>): this;
}
