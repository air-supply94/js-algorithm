interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

// https://leetcode-cn.com/problems/house-robber-iii/
// 337
export function rubberHouseHard(root: TreeNode | null, cache = new Map<TreeNode, number>()): number {
  if (root == null) {
    return 0;
  }

  if (cache.has(root)) {
    return cache.get(root);
  }

  const rubberRoot =
    root.val +
    (root.left ? rubberHouseHard(root.left.left, cache) + rubberHouseHard(root.left.right, cache) : 0) +
    (root.right ? rubberHouseHard(root.right.left, cache) + rubberHouseHard(root.right.right, cache) : 0);
  const rubberChild = rubberHouseHard(root.left, cache) + rubberHouseHard(root.right, cache);

  const result = Math.max(rubberRoot, rubberChild);
  cache.set(root, result);
  return result;
}
