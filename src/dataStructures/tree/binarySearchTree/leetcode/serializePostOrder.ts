import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function serializePostOrder<T = unknown>(array: T[]): BinarySearchTreeNodeInterface<T> | null {
  let i = array.length - 1;
  function recursion(): BinarySearchTreeNodeInterface<T> | null {
    if (i < 0) {
      return null;
    }

    const value = array[i];
    i--;
    if (value === null) {
      return null;
    }

    const rootNode = new BinarySearchTreeNode<T>(value);
    rootNode.setRight(recursion());
    rootNode.setLeft(recursion());
    return rootNode;
  }

  return recursion();
}
