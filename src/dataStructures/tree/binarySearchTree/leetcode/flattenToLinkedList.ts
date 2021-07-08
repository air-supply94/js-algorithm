import { BinarySearchTreeNode } from '../binarySearchTree';

export function flattenToLinkedList<T = unknown>(root: BinarySearchTreeNode<T> | null): BinarySearchTreeNode<T> | null {
  if (!root) {
    return null;
  }

  flattenToLinkedList<T>(root.left);
  flattenToLinkedList<T>(root.right);
  const left = root.left;
  const right = root.right;

  root.setLeft(null);
  root.setRight(left);

  let current = root;
  while (current.right) {
    current = current.right;
  }
  current.setRight(right);

  return root;
}
