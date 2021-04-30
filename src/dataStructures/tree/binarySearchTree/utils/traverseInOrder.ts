import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface, traverseCallback } from '../types';

export function traverseInOrder<T = unknown>(
  root: null | BinarySearchTreeNodeInterface<T>,
  callback: traverseCallback<T>
): void {
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
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
