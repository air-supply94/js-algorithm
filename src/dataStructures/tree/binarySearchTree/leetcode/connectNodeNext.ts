export function connectNodeNext(root: any) {
  if (!root) {
    return null;
  }

  connectTwoNode(root.left, root.right);
  return root;
}

function connectTwoNode(left: any, right: any) {
  if (left == null || right == null) {
    return;
  }

  left._next = right;
  connectTwoNode(left.left, left.right);
  connectTwoNode(right.left, right.right);
  connectTwoNode(left.right ? left.right : left.left, right.left ? right.left : right.right);
}
