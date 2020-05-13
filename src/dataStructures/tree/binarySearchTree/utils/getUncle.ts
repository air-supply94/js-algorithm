import { BinarySearchTreeNodeInterface } from '../types';

export function getUncle<T = unknown>(root: BinarySearchTreeNodeInterface<T>): null | BinarySearchTreeNodeInterface<T> {
  if (!root.parent) {
    return null;
  }

  if (!root.parent.parent) {
    return null;
  }

  if (!root.parent.parent.left || !root.parent.parent.right) {
    return null;
  }

  if (root.parent === root.parent.parent.left) {
    return root.parent.parent.right;
  }

  return root.parent.parent.left;
}
