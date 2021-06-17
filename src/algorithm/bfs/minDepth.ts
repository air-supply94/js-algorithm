import { Queue } from '../../dataStructures/queue';
import { BinarySearchTreeNodeInterface } from '../../dataStructures/tree/binarySearchTree/types';

export function minDepth<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null): number {
  const queue = new Queue<BinarySearchTreeNodeInterface<T>>();
  let depth = 0;

  if (root) {
    queue.enqueue(root);
  }

  while (!queue.isEmpty()) {
    depth++;
    const size = queue.size;

    for (let i = 0; i < size; i++) {
      const currentNode = queue.dequeue();

      if (!currentNode.left && !currentNode.right) {
        return depth;
      }

      if (currentNode.left) {
        queue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        queue.enqueue(currentNode.right);
      }
    }
  }

  return depth;
}
