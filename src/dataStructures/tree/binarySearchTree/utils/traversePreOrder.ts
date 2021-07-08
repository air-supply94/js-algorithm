import { Stack } from '../../../stack';
import { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

export function traversePreOrder<T = unknown>(
  root: BinarySearchTreeNode<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNode<T>>();
  if (root) {
    nodeStack.push(root);
  }

  while (!nodeStack.isEmpty()) {
    const currentNode = nodeStack.pop();
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
