import { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/serialize-and-deserialize-bst/submissions/
// 449
export function serializePostOrder(array: number[]): TreeNode | null {
  let i = array.length - 1;
  function recursion(): TreeNode | null {
    if (i < 0) {
      return null;
    }

    const value = array[i];
    i--;
    if (value === null) {
      return null;
    }

    const rootNode = new TreeNode(value);
    rootNode.right = recursion();
    rootNode.left = recursion();
    return rootNode;
  }

  return recursion();
}
