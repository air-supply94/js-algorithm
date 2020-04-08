import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface } from '../types';

export function traversePreOrder<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null): T[] {
  const result = [];
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  while (true) {
    while (currentNode) {
      result.push(currentNode.value);
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
  return result;
}
