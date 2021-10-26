import type { BinarySearchTreeNode } from '../binarySearchTree';

export function findMin<T = unknown>(root: null | BinarySearchTreeNode<T>): null | BinarySearchTreeNode<T> {
  if (!root) {
    return null;
  }

  if (root.left) {
    return findMin<T>(root.left);
  } else {
    return root;
  }
}
