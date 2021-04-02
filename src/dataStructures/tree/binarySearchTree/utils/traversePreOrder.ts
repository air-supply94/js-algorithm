import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traversePreOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode;

  if (root) {
    nodeStack.push(root);
  }

  while (!nodeStack.isEmpty()) {
    currentNode = nodeStack.pop();
    if (callback(currentNode) === false) {
      return;
    }

    if (currentNode.right) {
      nodeStack.push(currentNode.right);
    }

    if (currentNode.left) {
      nodeStack.push(currentNode.left);
    }
  }
}
