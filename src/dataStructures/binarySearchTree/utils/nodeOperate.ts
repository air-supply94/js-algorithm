import type { BinarySearchTreeNode } from '../binarySearchTree';
import { traverseInOrder } from './traverseInOrder';

export function setLeft<T = unknown>(root: BinarySearchTreeNode<T>, leftNode: BinarySearchTreeNode<T> | null): void {
  if (root.left != null) {
    root.left.parent = null;
  }

  root.left = leftNode;

  if (root.left != null) {
    root.left.parent = root;
  }
}

export function setRight<T = unknown>(root: BinarySearchTreeNode<T>, node: BinarySearchTreeNode<T> | null): BinarySearchTreeNode<T> {
  if (root.right != null) {
    root.right.parent = null;
  }

  root.right = node;

  if (root.right != null) {
    root.right.parent = root;
  }

  return root;
}

export function removeChild<T = unknown>(root: BinarySearchTreeNode<T>, nodeToRemove: BinarySearchTreeNode<T>): boolean {
  if (nodeToRemove == null) {
    return false;
  }

  if (nodeToRemove === root.left) {
    setLeft(root, null);
    return true;
  } else if (nodeToRemove === root.right) {
    setRight(root, null);
    return true;
  } else {
    return false;
  }
}

export function replaceChild<T = unknown>(root: BinarySearchTreeNode<T>, nodeToReplace: BinarySearchTreeNode<T>, replacementNode: BinarySearchTreeNode<T>): boolean {
  if (nodeToReplace == null || replacementNode == null) {
    return false;
  }

  if (root.left === nodeToReplace) {
    setLeft(root, replacementNode);
    return true;
  } else if (root.right === nodeToReplace) {
    setRight(root, replacementNode);
    return true;
  } else {
    return false;
  }
}

export function nodeToString<T = unknown>(root: BinarySearchTreeNode<T>): string {
  const result: T[] = [];
  traverseInOrder(root, (node) => {
    result.push(node.value);
  });

  return result.toString();
}
