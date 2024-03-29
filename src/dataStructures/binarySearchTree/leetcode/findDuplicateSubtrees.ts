import type { TreeNode } from './treeNode';

// https://leetcode-cn.com/problems/find-duplicate-subtrees/
// 652
export function findDuplicateSubtrees(root: TreeNode | null): TreeNode[] {
  const cache = new Map<string, number>();
  const list: TreeNode[] = [];

  function dfs(rootNode: TreeNode | null): string {
    if (rootNode == null) {
      return ' ';
    }

    const leftValue = dfs(rootNode.left);
    const rightValue = dfs(rootNode.right);
    const result = `${rootNode.val}_${leftValue}_${rightValue}`;
    const count = cache.get(result) >>> 0;

    if (count === 1) {
      list.push(rootNode);
    }

    cache.set(result, count + 1);
    return result;
  }

  dfs(root);
  return list;
}
