import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function constructMaximumTree(num: number[]): BinarySearchTreeNodeInterface<number> | null {
  return recursion(num, 0, num.length - 1);
}

function recursion(num: number[], startIndex: number, endIndex: number): BinarySearchTreeNodeInterface<number> | null {
  if (startIndex > endIndex) {
    return null;
  }

  let maxIndex = -1;
  let maxValue = -Infinity;

  for (let i = startIndex; i <= endIndex; i++) {
    if (num[i] > maxValue) {
      maxIndex = i;
      maxValue = num[i];
    }
  }

  const root = new BinarySearchTreeNode<number>(maxValue);
  root.setLeft(recursion(num, startIndex, maxIndex - 1));
  root.setRight(recursion(num, maxIndex + 1, endIndex));
  return root;
}