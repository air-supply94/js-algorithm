import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traversePreOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (currentNode) {
      if (callback(currentNode) === false) {
        return;
      }

      if (currentNode.right) {
        nodeStack.push(currentNode.right);
      }

      currentNode = currentNode.left;
    }

    if (nodeStack.isEmpty()) {
      return;
    }

    currentNode = nodeStack.pop();
  }
}
