import type { interfaces } from '../../../types';
import { traverseInOrder } from './traverseInOrder';

export function setLeft(root: interfaces.BinarySearchTreeNode, leftNode: interfaces.BinarySearchTreeNode | null): void {
  if (root.left) {
    root.left.parent = null;
  }

  root.left = leftNode;

  if (root.left) {
    root.left.parent = root;
  }
}

export function setRight(root: interfaces.BinarySearchTreeNode, node: interfaces.BinarySearchTreeNode | null): void {
  if (root.right) {
    root.right.parent = null;
  }

  root.right = node;

  if (root.right) {
    root.right.parent = root;
  }
}

export function removeChild(root: interfaces.BinarySearchTreeNode, nodeToRemove: interfaces.BinarySearchTreeNode): boolean {
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

export function replaceChild(root: interfaces.BinarySearchTreeNode, nodeToReplace: interfaces.BinarySearchTreeNode, replacementNode: interfaces.BinarySearchTreeNode): boolean {
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

export function nodeToString(root: interfaces.BinarySearchTreeNode): string {
  const result: unknown[] = [];
  traverseInOrder(root, (node) => {
    result.push(node.value);
  });

  return result.toString();
}
