import { BinarySearchTreeNodeInterface } from '../types';

export function findMin<T = unknown>(root: null | BinarySearchTreeNodeInterface<T>): null | BinarySearchTreeNodeInterface<T> {
  if (!root) {
    return null;
  }

  return root.left ? findMin<T>(root.left) : root;
}
