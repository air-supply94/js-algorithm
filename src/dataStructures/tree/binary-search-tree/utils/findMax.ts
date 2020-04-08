import { BinarySearchTreeNodeInterface } from '../types';

export function findMax<T = unknown>(root: null | BinarySearchTreeNodeInterface<T>): null | BinarySearchTreeNodeInterface<T> {
  if (!root) {
    return null;
  }

  if (!root.right) {
    return root;
  }

  return findMax<T>(root.right);
}
