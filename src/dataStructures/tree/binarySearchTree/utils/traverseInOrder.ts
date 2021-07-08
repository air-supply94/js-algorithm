import { Stack } from '../../../stack';
import { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

export function traverseInOrder<T = unknown>(
  root: null | BinarySearchTreeNode<T>,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNode<T>>();
  let peekNode = root;

  while (peekNode || !nodeStack.isEmpty()) {
    if (peekNode) {
      nodeStack.push(peekNode);
      peekNode = peekNode.left;
    } else {
      const tmpNode = nodeStack.pop();
      if (callback(tmpNode) === false) {
        return;
      }
      peekNode = tmpNode.right;
    }
  }
}
