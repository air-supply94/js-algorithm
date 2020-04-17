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
  outer: while (true) {
    while (currentNode) {
      if (callback(currentNode) === false) {
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
