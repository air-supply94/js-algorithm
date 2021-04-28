import { BinarySearchTreeNodeInterface } from '../types';

export function checkSubTree<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null, childRoot: BinarySearchTreeNodeInterface<T> | null): boolean {
  if (!childRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  if (isSubTree(root, childRoot)) {
    return true;
  } else {
    return checkSubTree(root.left, childRoot) || checkSubTree(root.right, childRoot);
  }
}

function isSubTree<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null, childRoot: BinarySearchTreeNodeInterface<T> | null): boolean {
  if (childRoot == null) {
    return true;
  }

  if (root == null) {
    return false;
  }

  if (root.value !== childRoot.value) {
    return false;
  } else {
    return isSubTree(root.left, childRoot.left) && isSubTree(root.right, childRoot.right);
  }
}
