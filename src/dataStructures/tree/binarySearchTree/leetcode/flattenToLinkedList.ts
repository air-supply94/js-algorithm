import { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from '../utils';

export function flattenToLinkedList<T = unknown>(root: BinarySearchTreeNode<T> | null): BinarySearchTreeNode<T> | null {
  if (!root) {
    return null;
  }

  flattenToLinkedList<T>(root.left);
  flattenToLinkedList<T>(root.right);
  const left = root.left;
  const right = root.right;

  setLeft(root, null);
  setRight(root, left);

  let current = root;
  while (current.right) {
    current = current.right;
  }
  setRight(current, right);

  return root;
}
