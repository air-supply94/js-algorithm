import { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from '../utils';

export function serializePostOrder<T = unknown>(array: T[]): BinarySearchTreeNode<T> | null {
  let i = array.length - 1;
  function recursion(): BinarySearchTreeNode<T> | null {
    if (i < 0) {
      return null;
    }

    const value = array[i];
    i--;
    if (value === null) {
      return null;
    }

    const rootNode = new BinarySearchTreeNode<T>(value);
    setRight(rootNode, recursion());
    setLeft(rootNode, recursion());
    return rootNode;
  }

  return recursion();
}
