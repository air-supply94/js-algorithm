import type { Comparator } from '../../../utils';
import type { BinarySearchTreeNode } from '../binarySearchTree';
import { find } from './find';
import { findMax } from './findMax';
import { findMin } from './findMin';

export function findReplaceNode<T = unknown>(root: BinarySearchTreeNode<T> | null, value: T, comparator: Comparator, isFindRightMin = true): BinarySearchTreeNode<T> | null {
  let endNode = find(root, value, comparator);
  if (endNode == null) {
    return null;
  }

  while (endNode.left != null || endNode.right != null) {
    const startNode = endNode;
    if (endNode.left != null && endNode.right != null) {
      endNode = isFindRightMin ? findMin(endNode.right) : findMax(endNode.left);
    } else if (endNode.left != null) {
      endNode = endNode.left;
    } else {
      endNode = endNode.right;
    }

    const tmpValue = startNode.value;
    startNode.value = endNode.value;
    endNode.value = tmpValue;
  }

  return endNode;
}
