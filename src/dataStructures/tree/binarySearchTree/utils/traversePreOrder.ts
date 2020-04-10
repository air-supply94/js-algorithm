import { Stack } from '../../../stack';
import {
  BinarySearchTreeNodeInterface,
  traverseCallback,
} from '../types';

export function traversePreOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback,
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  let breakTag = false;
  while (true) {
    while (currentNode) {
      if (callback(currentNode) === false) {
        breakTag = true;
        break;
      }

      if (currentNode.right) {
        nodeStack.push(currentNode.right);
      }

      currentNode = currentNode.left;
    }

    if (nodeStack.isEmpty() || breakTag) {
      break;
    }

    currentNode = nodeStack.pop();
  }
}
