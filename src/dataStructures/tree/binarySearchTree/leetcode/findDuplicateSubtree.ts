import { BinarySearchTreeNodeInterface } from '../types';

export function findDuplicateSubtree<T = unknown>(root: BinarySearchTreeNodeInterface<T> | null): Array<BinarySearchTreeNodeInterface<T>> {
  const cache = new Map<string, number>();
  const list: Array<BinarySearchTreeNodeInterface<T>> = [];

  function recursion(rootNode: BinarySearchTreeNodeInterface<T> | null): string {
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
