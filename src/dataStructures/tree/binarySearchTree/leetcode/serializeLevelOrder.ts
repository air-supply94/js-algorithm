import { Queue } from '../../../queue';
import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function serializeLevelOrder<T = unknown>(array: T[]): BinarySearchTreeNodeInterface<T> | null {
  if (!array.length) {
    return null;
  }

  let i = 0;
  const root = new BinarySearchTreeNode<T>(array[i]);
  i++;
  const queue = new Queue<BinarySearchTreeNodeInterface<T>>();
  queue.enqueue(root);
  let currentNode: BinarySearchTreeNodeInterface<T>;

  while (!queue.isEmpty() && i < array.length) {
    currentNode = queue.dequeue();

    if (array[i] != null) {
      currentNode.setLeft(new BinarySearchTreeNode<T>(array[i]));
      queue.enqueue(currentNode.left);
    }
    i++;

    if (i >= array.length) {
      return root;
    }

    if (array[i] != null) {
      currentNode.setRight(new BinarySearchTreeNode<T>(array[i]));
      queue.enqueue(currentNode.right);
    }
    i++;
  }

  return root;
}
