import { BinarySearchTreeNodeInterface } from '../types';

export function getUncle<T = unknown>(root: BinarySearchTreeNodeInterface<T>): null | BinarySearchTreeNodeInterface<T> {
  if (!root.parent || !root.parent.parent || !root.parent.parent.left || !root.parent.parent.right) {
    return null;
  }

  return root.parent === root.parent.parent.left ? root.parent.parent.right : root.parent.parent.left;
}
