import { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
// 94
// 简单改造
export function traverseInOrder<T = unknown>(
  root: null | BinarySearchTreeNode<T>,
  callback: traverseCallback<T>
): void {
  const nodeStack: Array<BinarySearchTreeNode<T>> = [];
  let peekNode = root;

  while (peekNode || nodeStack.length) {
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
