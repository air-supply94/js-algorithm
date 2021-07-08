import { BinarySearchTreeNode } from '../binarySearchTree';

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
    rootNode.setRight(recursion());
    rootNode.setLeft(recursion());
    return rootNode;
  }

  return recursion();
}
