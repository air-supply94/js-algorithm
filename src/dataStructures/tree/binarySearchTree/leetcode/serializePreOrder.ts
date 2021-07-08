import { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from '../utils';

export function serializePreOrder<T = unknown>(array: T[]): BinarySearchTreeNode<T> | null {
  let i = 0;
  function serialize(): BinarySearchTreeNode<T> | null {
    if (i >= array.length) {
      return null;
    }

    const value = array[i];
    i++;
    if (value === null) {
      return null;
    }

    const node = new BinarySearchTreeNode<T>(value);

    setLeft(node, serialize());
    setRight(node, serialize());
    return node;
  }

  return serialize();
}
