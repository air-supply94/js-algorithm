import { BinarySearchTreeNodeInterface } from '../types';
import { Comparator } from '../../../../utils/comparator';
import { find } from './find';
import { findMin } from './findMin';

export function remove<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  value: T,
  comparator: Comparator,
  removeRootCallback?: (root?: BinarySearchTreeNodeInterface<T> | null) => unknown,
): boolean {
  const nodeToRemove = find(root, value, comparator);

  if (!nodeToRemove) {
    return false;
  }

  const {parent} = nodeToRemove;

  if (!nodeToRemove.left && !nodeToRemove.right) {
    if (parent) {
      parent.removeChild(nodeToRemove);
    } else if (typeof removeRootCallback === 'function') {
      removeRootCallback();
    }
  } else if (nodeToRemove.left && nodeToRemove.right) {
    const nextBiggerNode = findMin(nodeToRemove.right);
    if (nextBiggerNode !== nodeToRemove.right) {
      nodeToRemove.setValue(nextBiggerNode.value);
      return remove(nodeToRemove.right, nextBiggerNode.value, comparator);
    } else {
      nodeToRemove.setValue(nodeToRemove.right.value);
      nodeToRemove.setRight(nodeToRemove.right.right);
    }
  } else {
    const childNode = nodeToRemove.left || nodeToRemove.right;

    if (parent) {
      parent.replaceChild(nodeToRemove, childNode);
    } else {
      nodeToRemove.setValue(childNode.value)
      .setLeft(childNode.left)
      .setRight(childNode.right);
    }
  }

  nodeToRemove.setParent(null);

  return true;
}
