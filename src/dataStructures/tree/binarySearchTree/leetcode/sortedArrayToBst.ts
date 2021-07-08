import { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from '../utils';

function initTreeNodes<T = unknown>(array: T[], start: number, end: number): BinarySearchTreeNode<T> {
  if (start <= end) {
    const middle = start + Math.floor((end - start) / 2);
    const node = new BinarySearchTreeNode<T>(array[middle]);
    setLeft(node, initTreeNodes(array, start, middle - 1));
    setRight(node, initTreeNodes(array, middle + 1, end));
    return node;
  } else {
    return null;
  }
}

export function sortedArrayToBst<T = unknown>(array: T[]): BinarySearchTreeNode<T> {
  return initTreeNodes(array, 0, array.length - 1);
}
