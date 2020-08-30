import { Queue } from '../../../queue';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traverseLevelOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback
): number {
  const nodeQueue = new Queue<BinarySearchTreeNodeInterface<T>>();
  let level = 0;
  if (root) {
    nodeQueue.enqueue(root);
  }

  while (!nodeQueue.isEmpty()) {
    level++;
    const nodes = nodeQueue.toArray();
    nodeQueue.clear();

    for (const currentNode of nodes) {
      if (callback(currentNode, level) === false) {
        return level;
      }

      if (currentNode.left) {
        nodeQueue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        nodeQueue.enqueue(currentNode.right);
      }
    }
  }

  return level;
}
