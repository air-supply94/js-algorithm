import type { Comparator } from '../../../utils';
import type { DoubleLinkedListNode } from '../doubleLinkedList';

export function find<T = unknown>(head: DoubleLinkedListNode<T>, findParams: {
  value?: T;
  callback?: (value: T) => boolean | void;
}, compare: Comparator): null | DoubleLinkedListNode<T> {
  const {
    value,
    callback,
  } = findParams;

  let currentNode = head;
  while (currentNode) {
    if (typeof callback === 'function' && callback(currentNode.value) === true) {
      return currentNode;
    } else if (compare.equal(currentNode.value, value)) {
      return currentNode;
    }
    currentNode = currentNode.next;
  }

  return null;
}
