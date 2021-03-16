import { DoubleLinkedListNodeInterface } from '../types';
import { each } from './each';
import { formatIndex } from './formatIndex';

export function get<T = unknown>(
  index: number,
  size: number,
  head: null | DoubleLinkedListNodeInterface<T>,
  tail: null | DoubleLinkedListNodeInterface<T>
): null | DoubleLinkedListNodeInterface<T> {
  const position = formatIndex(index, size);
  if (position < 0 || position >= size) {
    return null;
  }

  if (position <= (size >>> 1)) {
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
    let i = 0;
    each<T>(tail, size, 'previous', (node) => {
      if (i + 1 + position === size) {
        findNode = node;
        return false;
      } else {
        i++;
        return true;
      }
    });
    return findNode;
  }
}
