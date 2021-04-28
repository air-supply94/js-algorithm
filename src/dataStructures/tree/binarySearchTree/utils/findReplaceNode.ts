import { Comparator } from '../../../../utils';
import { BinarySearchTreeNodeInterface } from '../types';
import { find } from './find';
import { findMax } from './findMax';
import { findMin } from './findMin';

export function findReplaceNode<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  value: T,
  comparator: Comparator,
  isFindRightMin = true,
  swap = function(
    tmpNode: BinarySearchTreeNodeInterface<T>,
    replaceNode: BinarySearchTreeNodeInterface<T>
  ): void {
    const tmpValue = tmpNode.value;
    tmpNode.setValue(replaceNode.value);
    replaceNode.setValue(tmpValue);
  }): null | BinarySearchTreeNodeInterface<T> {
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
