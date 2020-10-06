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

  while (!queue.isEmpty() && i < array.length) {
    const currentNode = queue.dequeue();

    const leftValue = array[i];
    i++;
    if (leftValue === null) {
      currentNode.setLeft(null);
    } else {
      const leftNode = new BinarySearchTreeNode<T>(leftValue);
      currentNode.setLeft(leftNode);
      queue.enqueue(leftNode);
    }

    if (i >= array.length) {
      break;
    }

    const rightValue = array[i];
    i++;
    if (rightValue === null) {
      currentNode.setRight(null);
    } else {
      const rightNode = new BinarySearchTreeNode<T>(rightValue);
      currentNode.setRight(rightNode);
      queue.enqueue(rightNode);
    }
  }

  return root;
}
