import { BinarySearchTreeNode } from '../binarySearchTree';

export function checkSubTree(root: BinarySearchTreeNode<number> | null, childRoot: BinarySearchTreeNode<number> | null): boolean {
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

function isSubTree<T = unknown>(root: BinarySearchTreeNode<T> | null, childRoot: BinarySearchTreeNode<T> | null): boolean {
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

export function pathSum(root: BinarySearchTreeNode<number> | null, sum: number): number {
  if (!root) {
    return 0;
  }

  return pathSumDfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

function pathSumDfs(root: BinarySearchTreeNode<number> | null, sum: number): number {
  if (!root) {
    return 0;
  }

  const newSum = sum - root.value;
  return (newSum === 0 ? 1 : 0) + pathSumDfs(root.left, newSum) + pathSumDfs(root.right, newSum);
}
