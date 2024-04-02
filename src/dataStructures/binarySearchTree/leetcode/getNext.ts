interface TreeLinkNode {
  val: number;
  left: TreeLinkNode | null;
  right: TreeLinkNode | null;
  next: TreeLinkNode | null;
}

// 剑指 Offer
// https://www.nowcoder.com/practice/9023a0c988684a53960365b889ceaf5e
export function getNext(root: TreeLinkNode): TreeLinkNode | null {
  if (!root) {
    return null;
  }

  if (root.right != null) {
    let minNode = root.right;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode;
  }

  while (root.next) {
    if (root.next.left === root) {
      return root.next;
    }
    root = root.next;
  }
  return null;
}
