import { Queue } from '../../../queue';
import {
  BinarySearchTreeNodeInterface,
  traverseCallback,
} from '../types';

export function traverseLevelOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback,
): void {
  const nodeQueue = new Queue<BinarySearchTreeNodeInterface<T>>();
  if (root) {
    nodeQueue.enqueue(root);
  }

  while (!nodeQueue.isEmpty()) {
    const currentNode = nodeQueue.dequeue();
    if (callback(currentNode) === false) {
      break;
    }

    if (currentNode.left) {
      nodeQueue.enqueue(currentNode.left);
    }

    if (currentNode.right) {
      nodeQueue.enqueue(currentNode.right);
    }
  }
}
