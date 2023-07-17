import type { interfaces } from '../../../types';
import { find } from './find';
import { findMax } from './findMax';
import { findMin } from './findMin';

export function findReplaceNode<T = unknown>(root: interfaces. BinarySearchTreeNode<T> | null, value: T, comparator: interfaces.Comparator<T>, isFindRightMin = true): interfaces.BinarySearchTreeNode<T> | null {
  let findNode = find(root, value, comparator);
  if (findNode == null) {
    return null;
  }

  while (findNode.left || findNode.right) {
    const exchangeNode = findNode;
    if (findNode.left && findNode.right) {
      findNode = isFindRightMin ? findMin(findNode.right) : findMax(findNode.left);
    } else if (findNode.left) {
      findNode = findNode.left;
    } else {
      findNode = findNode.right;
    }

    const tmpValue = exchangeNode.value;
    exchangeNode.value = findNode.value;
    findNode.value = tmpValue;
  }

  return findNode;
}
