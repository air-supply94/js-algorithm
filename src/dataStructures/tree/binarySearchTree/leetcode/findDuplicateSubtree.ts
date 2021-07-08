import { BinarySearchTreeNode } from '../binarySearchTree';

export function findDuplicateSubtree<T = unknown>(root: BinarySearchTreeNode<T> | null): Array<BinarySearchTreeNode<T>> {
  const cache = new Map<string, number>();
  const list: Array<BinarySearchTreeNode<T>> = [];

  function recursion(rootNode: BinarySearchTreeNode<T> | null): string {
    if (!rootNode) {
      return ' ';
    }

    const leftValue = recursion(rootNode.left);
    const rightValue = recursion(rootNode.right);
    const result = `${rootNode.value}_${leftValue}_${rightValue}`;
    const count = cache.get(result) >>> 0;

    if (count === 1) {
      list.push(rootNode);
    }

    cache.set(result, count + 1);
    return result;
  }

  recursion(root);
  return list;
}
