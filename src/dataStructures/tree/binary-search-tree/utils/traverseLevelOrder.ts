import { Queue } from '../../../queue';
import { BinarySearchTreeNodeInterface } from '../types';

export function traverseLevelOrder<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null): T[] {
  const result = [];
  const nodeQueue = new Queue<BinarySearchTreeNodeInterface<T>>();
  nodeQueue.enqueue(root);
  while (!nodeQueue.isEmpty()) {
    const currentNode = nodeQueue.dequeue();
    result.push(currentNode.value);

    if (currentNode.left) {
      nodeQueue.enqueue(currentNode.left);
    }

    if (currentNode.right) {
      nodeQueue.enqueue(currentNode.right);
    }
  }

  return result;
}
