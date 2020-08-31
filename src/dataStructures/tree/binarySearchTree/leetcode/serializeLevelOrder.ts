import { Queue } from '../../../queue';
import { BinarySearchTreeNode } from '../binarySearchTreeNode';
import { BinarySearchTreeNodeInterface } from '../types';

export function serializeLevelOrder<T = unknown>(array: T[]): BinarySearchTreeNodeInterface<T> | null {
  if (!array.length) {
    return null;
  }

  const root = new BinarySearchTreeNode<T>(array.shift());
  const queue = new Queue<BinarySearchTreeNodeInterface<T>>();
  queue.enqueue(root);

  while (!queue.isEmpty()) {
    const currentNode = queue.dequeue();

    if (!array.length) {
      break;
    }

    const leftValue = array.shift();
    if (leftValue === null) {
      currentNode.setLeft(null);
    } else {
      const leftNode = new BinarySearchTreeNode<T>(leftValue);
      currentNode.setLeft(leftNode);
      queue.enqueue(leftNode);
    }

    if (!array.length) {
      break;
    }

    const rightValue = array.shift();
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
