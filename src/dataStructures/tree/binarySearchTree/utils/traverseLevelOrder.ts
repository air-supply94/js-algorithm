import { Queue } from '../../../queue';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traverseLevelOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback<T>
): number {
  const nodeQueue = new Queue<BinarySearchTreeNodeInterface<T>>();
  let level = 0;
  if (root) {
    nodeQueue.enqueue(root);
  }

  while (!nodeQueue.isEmpty()) {
    level++;
    let i = 0;
    const size = nodeQueue.size;

    while (i < size) {
      const currentNode = nodeQueue.dequeue();
      if (callback(currentNode, level) === false) {
        return level;
      }

      if (currentNode.left) {
        nodeQueue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        nodeQueue.enqueue(currentNode.right);
      }
      i++;
    }
  }

  return level;
}
