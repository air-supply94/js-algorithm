import { BinarySearchTreeNodeInterface } from '../types';
import { Comparator } from '../../../../utils/comparator';
import { find } from './find';
import { findMin } from './findMin';
import { findMax } from './findMax';

export function findReplaceNode<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  value: T,
  comparator: Comparator,
  isFindMin = true,
  swap = function (
    tmpNode: BinarySearchTreeNodeInterface<T>,
    replaceNode: BinarySearchTreeNodeInterface<T>,
  ): void {
    const tmpValue = tmpNode.value;
    tmpNode.setValue(replaceNode.value);
    replaceNode.setValue(tmpValue);
  },
): null | BinarySearchTreeNodeInterface<T> {
  let tmpNode = find<T>(root, value, comparator);
  let replaceNode = tmpNode;
  if (!tmpNode) {
    return tmpNode;
  }

  while (replaceNode.left || replaceNode.right) {
    if (replaceNode.left && replaceNode.right) {
      replaceNode = isFindMin ? findMin<T>(replaceNode.right) : findMax<T>(replaceNode.left);
    } else {
      replaceNode = replaceNode.left || replaceNode.right;
    }

    swap(tmpNode, replaceNode);
    tmpNode = replaceNode;
  }

  return replaceNode;
}
