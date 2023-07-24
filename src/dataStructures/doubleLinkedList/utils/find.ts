import type { interfaces } from '../../../types';

export function find<T = unknown>(
  head: interfaces.DoubleLinkedListNode<T>,
  findParams: {
    value?: T;
    callback?: (value: T) => boolean | void;
  },
  comparator: interfaces.Comparator<T>
): interfaces.DoubleLinkedListNode<T> | null {
  const {
    value,
    callback,
  } = findParams;

  let currentNode = head;
  while (currentNode) {
    if (typeof callback === 'function') {
      if (callback(currentNode.value)) {
        return currentNode;
      }
    } else if (comparator.equal(currentNode.value, value)) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }

  return null;
}
