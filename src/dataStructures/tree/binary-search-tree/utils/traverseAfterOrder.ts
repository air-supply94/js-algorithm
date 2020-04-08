import { Stack } from '../../../stack';
import { BinarySearchTreeNodeInterface } from '../types';

export function traverseAfterOrder<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null): T[] {
  const result = [];
  const nodeStack = new Stack<BinarySearchTreeNodeInterface<T>>();
  let currentNode = root;
  nodeStack.push(currentNode);

  while (!nodeStack.isEmpty()) {
    if (nodeStack.peek() !== currentNode.parent) {
      // tslint:disable-next-line:no-conditional-assignment
      while (currentNode = nodeStack.peek()) {
        if (currentNode.left) {
          if (currentNode.right) {
            nodeStack.push(currentNode.right);
          }
          nodeStack.push(currentNode.left);
        } else {
          nodeStack.push(currentNode.right);
        }
      }
      nodeStack.pop();
    }
    currentNode = nodeStack.pop();
    result.push(currentNode.value);
  }
  return result;
}
