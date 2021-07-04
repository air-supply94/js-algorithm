interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// https://leetcode-cn.com/problems/house-robber-iii/
// 337
export function rubberHouseHard(root: TreeNode | null): number {
  return rubber(root, new Map<TreeNode, number>());
}

function rubber(root: TreeNode | null, cache: Map<TreeNode, number>): number {
  if (!root) {
    return 0;
  }

  if (cache.has(root)) {
    return cache.get(root);
  }

  const rubberRoot = root.val + (root.left ? rubber(root.left.left, cache) + rubber(root.left.right, cache) : 0) + (root.right ? rubber(root.right.left, cache) + rubber(root.right.right, cache) : 0);
  const rubberChild = rubber(root.left, cache) + rubber(root.right, cache);

  const result = Math.max(rubberRoot, rubberChild);
  cache.set(root, result);
  return result;
}
