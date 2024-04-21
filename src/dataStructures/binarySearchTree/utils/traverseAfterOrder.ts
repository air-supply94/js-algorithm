import type { interfaces } from '../../../types';

export function traverseAfterOrder<T = unknown>(root: interfaces.BinarySearchTreeNode<T> | null, callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
  const nodeStack: Array<interfaces.BinarySearchTreeNode<T>> = [];
  let currentVisitedNode: interfaces.BinarySearchTreeNode<T> = null;
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
