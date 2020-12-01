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

  if (position >= size / 2 >>> 0) {
    let i = 0;
    let findNode = null;

    each<T>(tail, size, 'previous', (node) => {
      if (size - 1 - i === position) {
        findNode = node;
        return false;
      }
      ++i;
      return true;
    });

    return findNode;
  } else {
    let i = 0;
    let findNode = null;

    each<T>(head, size, 'next', (node) => {
      if (i === position) {
        findNode = node;
        return false;
      }
      i++;
      return true;
    });
    return findNode;
  }
}
