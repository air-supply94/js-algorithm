import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traverseInOrder<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  let tmpNode;

  while (currentNode || !nodeStack.isEmpty()) {
    if (currentNode) {
      nodeStack.push(currentNode);
      currentNode = currentNode.left;
    } else {
      tmpNode = nodeStack.pop();
      if (callback(tmpNode) === false) {
        return;
      }
      currentNode = tmpNode.right;
    }
  }
}
