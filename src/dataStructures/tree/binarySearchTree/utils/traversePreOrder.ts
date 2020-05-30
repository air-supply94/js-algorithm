import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traversePreOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  // eslint-disable-next-line no-labels,no-constant-condition
  outer: while (true) {
    while (currentNode) {
      if (callback(currentNode) === false) {
        // eslint-disable-next-line no-labels
        break outer;
      }

      if (currentNode.right) {
        nodeStack.push(currentNode.right);
      }

      currentNode = currentNode.left;
    }

    if (nodeStack.isEmpty()) {
      break;
    }

    currentNode = nodeStack.pop();
  }
}
