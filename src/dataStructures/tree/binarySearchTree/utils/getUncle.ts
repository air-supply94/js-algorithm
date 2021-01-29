import { BinarySearchTreeNodeInterface } from '../types';

export function getUncle<T = unknown>(root: BinarySearchTreeNodeInterface<T>): null | BinarySearchTreeNodeInterface<T> {
  if (root) {
    if (root.parent) {
      if (root.parent.parent) {
        if (root.parent.parent.left) {
          if (root.parent.parent.right) {
            return root.parent === root.parent.parent.left ? root.parent.parent.right : root.parent.parent.left;
          }
        }
      }
    }
  }
  return null;
}
