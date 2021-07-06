import { DoubleLinkedListNode } from '../doubleLinkedList';
import { each } from './each';
import { formatIndex } from './formatIndex';

export function get<T = unknown>(
  index: number,
  size: number,
  head: null | DoubleLinkedListNode<T>,
  tail: null | DoubleLinkedListNode<T>
): null | DoubleLinkedListNode<T> {
  const position = formatIndex(index, size);
  if (position < 0 || position >= size) {
    return null;
  }

  const middleIndex = size >>> 1;
  if (position <= middleIndex) {
    let findNode = null;
    let i = 0;
    each<T>(head, size, 'next', (node) => {
      if (i === position) {
        findNode = node;
        return false;
      } else {
        i++;
        return true;
      }
    });
    return findNode;
  } else {
    let findNode = null;
    let i = size - 1;
    each<T>(tail, size, 'previous', (node) => {
      if (i === position) {
        findNode = node;
        return false;
      } else {
        i--;
        return true;
      }
    });
    return findNode;
  }
}
