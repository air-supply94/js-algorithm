import { Comparator } from '../../../../utils';
import { BinarySearchTreeNode } from '../binarySearchTree';
import { find } from './find';
import { findMax } from './findMax';
import { findMin } from './findMin';

function swap<T = unknown>(tmpNode: BinarySearchTreeNode<T>, replaceNode: BinarySearchTreeNode<T>): void {
  const tmpValue = tmpNode.value;
  tmpNode.value = replaceNode.value;
  replaceNode.value = tmpValue;
}

export function findReplaceNode<T = unknown>(root: null | BinarySearchTreeNode<T>, value: T, comparator: Comparator, isFindRightMin = true): null | BinarySearchTreeNode<T> {
  let replaceNode = find<T>(root, value, comparator);
  if (!replaceNode) {
    return null;
  }

  while (replaceNode.left || replaceNode.right) {
    const tmpNode = replaceNode;
    if (replaceNode.left && replaceNode.right) {
      replaceNode = isFindRightMin ? findMin<T>(replaceNode.right) : findMax<T>(replaceNode.left);
    } else if (replaceNode.left) {
      replaceNode = replaceNode.left;
    } else {
      replaceNode = replaceNode.right;
    }

    swap(tmpNode, replaceNode);
  }

  return replaceNode;
}
