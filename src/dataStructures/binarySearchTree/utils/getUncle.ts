import type { BinarySearchTreeNode } from '../binarySearchTree';

export function getUncle<T = unknown>(root: BinarySearchTreeNode<T>): null | BinarySearchTreeNode<T> {
  if (root && root.parent && root.parent.parent && root.parent.parent.left && root.parent.parent.right) {
    if (root.parent === root.parent.parent.left) {
      return root.parent.parent.right;
    } else {
      return root.parent.parent.left;
    }
  } else {
    return null;
  }
}
