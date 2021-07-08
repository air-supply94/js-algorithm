import { BinarySearchTreeNode } from '../binarySearchTree';

export function bstToGst(root: BinarySearchTreeNode<number> | null): BinarySearchTreeNode<number> | null {
  let sum = 0;
  function inorderTraverse(rootNode: BinarySearchTreeNode<number> | null) {
    if (!rootNode) {
      return;
    }

    inorderTraverse(rootNode.right);
    sum += rootNode.value;
    rootNode.setValue(sum);
    inorderTraverse(rootNode.left);
  }

  inorderTraverse(root);
  return root;
}
