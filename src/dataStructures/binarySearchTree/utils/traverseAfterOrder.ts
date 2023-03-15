import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

export function traverseAfterOrder<T = unknown>(
  root: BinarySearchTreeNode<T> | null,
  callback: traverseCallback<T>
): void {
  const nodeStack: Array<BinarySearchTreeNode<T>> = [];
  let currentVisitedNode: BinarySearchTreeNode<T> = null;
  if (root) {
    nodeStack.push(root);
  }

  while (nodeStack.length > 0) {
    if (currentVisitedNode == null || nodeStack[nodeStack.length - 1] !== currentVisitedNode.parent) {
      let peekNode = nodeStack[nodeStack.length - 1];
      while (peekNode.left || peekNode.right) {
        if (peekNode.right) {
          nodeStack.push(peekNode.right);
        }

        if (peekNode.left) {
          nodeStack.push(peekNode.left);
        }
        peekNode = nodeStack[nodeStack.length - 1];
      }
    }

    currentVisitedNode = nodeStack.pop();
    if (callback(currentVisitedNode) === false) {
      return;
    }
  }
}
