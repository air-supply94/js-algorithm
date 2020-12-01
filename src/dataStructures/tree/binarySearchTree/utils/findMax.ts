import { BinarySearchTreeNodeInterface } from '../types';

export function findMax<T = unknown>(root: null | BinarySearchTreeNodeInterface<T>): null | BinarySearchTreeNodeInterface<T> {
  if (!root) {
    return null;
  }

  return root.right ? findMax<T>(root.right) : root;
}
