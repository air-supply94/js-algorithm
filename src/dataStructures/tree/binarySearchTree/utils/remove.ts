import { BinarySearchTreeNodeInterface } from '../types';
import { Comparator } from '../../../../utils/comparator';
import { find } from './find';
import { findMin } from './findMin';
import { BinarySearchTreeNode } from '../binarySearchTreeNode';

export function remove<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  value: T,
  comparator: Comparator,
  removeRootCallback?: (root?: BinarySearchTreeNodeInterface<T> | null) => unknown,
): null | BinarySearchTreeNodeInterface<T> {
  const nodeToRemove = find(root, value, comparator);
  if (!nodeToRemove) {
    return null;
  }

  const {parent} = nodeToRemove;
  // 返回node。avl树需要此parent做平衡，value保持删除的value不变
  const returnNode = new BinarySearchTreeNode<T>();
  returnNode.setValue(nodeToRemove.value)
  .setParent(nodeToRemove.parent);

  if (!nodeToRemove.left && !nodeToRemove.right) {
    if (parent) {
      parent.removeChild(nodeToRemove);
    } else if (typeof removeRootCallback === 'function') {
      removeRootCallback();
    }
  } else if (nodeToRemove.left && nodeToRemove.right) {
    // 真正删除的node
    const nextBiggerNode = findMin(nodeToRemove.right);
    returnNode.setParent(nextBiggerNode.parent);
    if (nextBiggerNode !== nodeToRemove.right) {
      nodeToRemove.setValue(nextBiggerNode.value);
      remove(nodeToRemove.right, nextBiggerNode.value, comparator);
    } else {
      nodeToRemove.setValue(nodeToRemove.right.value);
      nodeToRemove.setRight(nodeToRemove.right.right);
    }
  } else {
    // 真正删除的node
    const childNode = nodeToRemove.left || nodeToRemove.right;
    returnNode.setParent(childNode.parent);

    if (parent) {
      parent.replaceChild(nodeToRemove, childNode);
    } else {
      nodeToRemove.setValue(childNode.value)
      .setLeft(childNode.left)
      .setRight(childNode.right);
    }
  }

  return returnNode;
}
