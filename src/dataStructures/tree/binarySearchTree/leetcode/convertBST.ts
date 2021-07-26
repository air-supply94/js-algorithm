import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
// 538
export function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  function inorderTraverse(rootNode: TreeNode | null) {
    if (!rootNode) {
      return;
    }

    inorderTraverse(rootNode.right);
    sum += rootNode.val;
    rootNode.val = sum;
    inorderTraverse(rootNode.left);
  }

  inorderTraverse(root);
  return root;
}
