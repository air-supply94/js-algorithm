import { Queue } from '../../../queue';
import { BinarySearchTreeNode } from '../binarySearchTree';
import { setLeft, setRight } from '../utils';

export function serializeLevelOrder<T = unknown>(array: T[]): BinarySearchTreeNode<T> | null {
  if (!array.length) {
    return null;
  }

  let i = 1;
  const root = new BinarySearchTreeNode<T>(array[0]);
  const queue = new Queue<BinarySearchTreeNode<T>>();
  queue.enqueue(root);

  while (!queue.isEmpty() && i < array.length) {
    const currentNode = queue.dequeue();

    const leftValue = array[i];
    i++;
    if (leftValue != null) {
      setLeft(currentNode, new BinarySearchTreeNode<T>(leftValue));
      queue.enqueue(currentNode.left);
    }

    if (i >= array.length) {
      return root;
    }

    const rightValue = array[i];
    i++;
    if (rightValue != null) {
      setRight(currentNode, new BinarySearchTreeNode<T>(rightValue));
      queue.enqueue(currentNode.right);
    }
  }

  return root;
}
