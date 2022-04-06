interface Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
}

// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
// 116
export function connect(root: Node): Node | null {
  if (!root) {
    return null;
  }

  connectTwoNode(root.left, root.right);
  return root;
}

// 三叉树遍历
function connectTwoNode(left: Node, right: Node): void {
  if (left == null || right == null) {
    return;
  }

  left.next = right;
  connectTwoNode(left.left, left.right);
  connectTwoNode(right.left, right.right);
  connectTwoNode(left.right ? left.right : left.left, right.left ? right.left : right.right);
}
