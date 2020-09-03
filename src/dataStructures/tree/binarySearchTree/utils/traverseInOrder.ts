import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traverseInOrder<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (currentNode) {
      nodeStack.push(currentNode);
      currentNode = currentNode.left;
    }

    if (nodeStack.isEmpty()) {
      break;
    }

    currentNode = nodeStack.pop();
    if (callback(currentNode) === false) {
      break;
    }
    currentNode = currentNode.right;
  }
}
