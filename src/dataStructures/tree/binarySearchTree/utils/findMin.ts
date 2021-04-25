import { BinarySearchTreeNodeInterface } from '../types';

export function findMin<T = unknown>(root: null | BinarySearchTreeNodeInterface<T>): null | BinarySearchTreeNodeInterface<T> {
  if (!root) {
    return null;
  }

  if (root.left) {
    return findMin<T>(root.left);
  } else {
    return root;
  }
}
