import { BinarySearchTreeNodeInterface } from '../types';

export function bstToGst(root: BinarySearchTreeNodeInterface<number> | null): BinarySearchTreeNodeInterface<number> | null {
  let sum = 0;
  function inorderTraverse(rootNode: BinarySearchTreeNodeInterface<number> | null) {
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
