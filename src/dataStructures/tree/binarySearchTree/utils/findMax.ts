import type { BinarySearchTreeNode } from '../binarySearchTree';

export function findMax<T = unknown>(root: null | BinarySearchTreeNode<T>): null | BinarySearchTreeNode<T> {
  if (!root) {
    return null;
  }

  if (root.right) {
    return findMax<T>(root.right);
  } else {
    return root;
  }
}
