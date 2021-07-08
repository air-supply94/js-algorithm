import { Stack } from '../../../stack';
import { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

export function traverseAfterOrder<T = unknown>(
  root: BinarySearchTreeNode<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNode<T>>();
  let currentNode = root;
  if (root) {
    nodeStack.push(root);
  }

  while (!nodeStack.isEmpty()) {
    if (nodeStack.peek() !== currentNode.parent) {
      let peekNode = nodeStack.peek();
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
