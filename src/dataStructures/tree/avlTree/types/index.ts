import {
  BinarySearchTreeInterface,
  BinarySearchTreeNodeInterface,
} from '../../binarySearchTree/types';

export interface AvlTreeInterface<T = unknown> extends BinarySearchTreeInterface<T> {
  readonly binarySearchTree: BinarySearchTreeInterface<T>;
  balance(node: BinarySearchTreeNodeInterface<T>): this;
}
