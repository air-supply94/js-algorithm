import type { Comparator } from '../../../utils';
import type { BinarySearchTreeNode } from '../binarySearchTree';
import { find } from './find';
import { findMax } from './findMax';
import { findMin } from './findMin';

function swap<T = unknown>(tmpNode: BinarySearchTreeNode<T>, replaceNode: BinarySearchTreeNode<T>): void {
  const tmpValue = tmpNode.value;
  tmpNode.value = replaceNode.value;
  replaceNode.value = tmpValue;
}

export function findReplaceNode<T = unknown>(root: null | BinarySearchTreeNode<T>, value: T, comparator: Comparator, isFindRightMin = true): null | BinarySearchTreeNode<T> {
  let endNode = find<T>(root, value, comparator);
  if (endNode == null) {
    return null;
  }

  while (endNode.left != null || endNode.right != null) {
    const startNode = endNode;
    if (endNode.left != null && endNode.right != null) {
      endNode = isFindRightMin ? findMin<T>(endNode.right) : findMax<T>(endNode.left);
    } else if (endNode.left != null) {
      endNode = endNode.left;
    } else {
      endNode = endNode.right;
    }

    swap(startNode, endNode);
  }

  return endNode;
}
