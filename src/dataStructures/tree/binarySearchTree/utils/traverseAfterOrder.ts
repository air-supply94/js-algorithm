import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traverseAfterOrder<T = unknown>(
  root: BinarySearchTreeNodeInterface<T> | null,
  callback: traverseCallback
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  if (root) {
    nodeStack.push(currentNode);
  }

  while (!nodeStack.isEmpty()) {
    let peekNode = nodeStack.peek();
    if (peekNode !== currentNode.parent) {
      while (peekNode) {
        if (peekNode.left) {
          if (peekNode.right) {
            nodeStack.push(peekNode.right);
          }
          nodeStack.push(peekNode.left);
        } else {
          nodeStack.push(peekNode.right);
        }
        peekNode = nodeStack.peek();
      }
      nodeStack.pop();
    }

    currentNode = nodeStack.pop();
    if (callback(currentNode) === false) {
      break;
    }
  }
}
