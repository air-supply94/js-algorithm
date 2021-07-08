import { BinarySearchTreeNode } from '../binarySearchTree';

export function lowestCommonAncestor(root: BinarySearchTreeNode<number> | null, p: number, q: number): BinarySearchTreeNode<number> | null {
  if (root === null) {
    return null;
  }

  if (root.value === p || root.value === q) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left === null && right === null) {
    return null;
  } else if (left !== null && right !== null) {
    return root;
  } else if (left !== null) {
    return left;
  } else {
    return right;
  }
}

export function lowestCommonAncestorBst(root: BinarySearchTreeNode<number> | null, p: number, q: number): BinarySearchTreeNode<number> | null {
  if (!root) {
    return null;
  }

  if (root.value === p || root.value === q) {
    return root;
  }

  if (p < root.value && q < root.value) {
    return lowestCommonAncestorBst(root.left, p, q);
  } else if (root.value < p && root.value < q) {
    return lowestCommonAncestorBst(root.right, p, q);
  } else {
    return root;
  }
}
