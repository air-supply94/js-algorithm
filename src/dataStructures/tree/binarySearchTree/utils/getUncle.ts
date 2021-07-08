import { BinarySearchTreeNode } from '../binarySearchTree';

export function getUncle<T = unknown>(root: BinarySearchTreeNode<T>): null | BinarySearchTreeNode<T> {
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
