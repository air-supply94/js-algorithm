import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function serializePreOrder<T = unknown>(array: T[]): BinarySearchTreeNodeInterface<T> | null {
  if (!array.length) {
    return null;
  }
  let i = 0;

  function serialize(): BinarySearchTreeNodeInterface<T> | null {
    if (i >= array.length) {
      return null;
    }

    const value = array[i];
    i++;
    if (value === null) {
      return null;
    }

    const node = new BinarySearchTreeNode<T>(value);

    node.setLeft(serialize());
    node.setRight(serialize());
    return node;
  }

  return serialize();
}
