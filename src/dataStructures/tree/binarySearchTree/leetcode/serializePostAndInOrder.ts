import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// 106
export function serializePostAndInOrder(inorder: number[], postorder: number[]): TreeNode | null {
  return recursion(postorder, 0, postorder.length - 1, inorder, 0, inorder.length - 1);
}

function recursion(postorder: number[], postStartIndex: number, postEndIndex: number, inorder: number[], inStartIndex: number, inEndIndex: number): TreeNode {
  if (postStartIndex > postEndIndex) {
    return null;
  }

  const rootValue = postorder[postEndIndex];
  const equalIndex = inorder.findIndex((item) => item === rootValue, inStartIndex);
  const size = equalIndex - inStartIndex + 1;
  const root = new TreeNode(rootValue);
  root.left = recursion(postorder, postStartIndex, postStartIndex + size - 2, inorder, inStartIndex, equalIndex - 1);
  root.right = recursion(postorder, postStartIndex + size - 1, postEndIndex - 1, inorder, equalIndex + 1, inEndIndex);
  return root;
}
