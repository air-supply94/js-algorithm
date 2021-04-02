import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traverseAfterOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  let peekNode;
  if (root) {
    nodeStack.push(root);
  }

  while (!nodeStack.isEmpty()) {
    if (nodeStack.peek() !== currentNode.parent) {
      peekNode = nodeStack.peek();
      while (peekNode.left || peekNode.right) {
        if (peekNode.left && peekNode.right) {
          nodeStack.push(peekNode.right);
          nodeStack.push(peekNode.left);
        } else if (peekNode.right) {
          nodeStack.push(peekNode.right);
        } else {
          nodeStack.push(peekNode.left);
        }
        peekNode = nodeStack.peek();
      }
    }

    currentNode = nodeStack.pop();
    if (callback(currentNode) === false) {
      return;
    }
  }
}
