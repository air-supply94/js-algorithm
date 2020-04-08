import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface } from '../types';

export function traverseInOrder<T = unknown>(root: null | BinarySearchTreeNodeInterface<T>): T[] {
  const result = [];
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  while (true) {
    while (currentNode) {
      nodeStack.push(currentNode);
      currentNode = currentNode.left;
    }

    if (nodeStack.isEmpty()) {
      break;
    }

    currentNode = nodeStack.pop();
    result.push(currentNode.value);
    currentNode = currentNode.right;
  }
  return result;
}
