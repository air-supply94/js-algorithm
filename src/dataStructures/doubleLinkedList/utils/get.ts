import { DoubleLinkedListNodeInterface } from '../types';
import { formatIndex } from './formatIndex';
import { each } from './each';

export function get<T = unknown>(
  index: number,
  size: number,
  head: null | DoubleLinkedListNodeInterface<T>,
  tail: null | DoubleLinkedListNodeInterface<T>,
): null | DoubleLinkedListNodeInterface<T> {
  const position = formatIndex(index, size);
  let i = 0;
  let findNode = null;

  if (position < 0 || position >= size) {
    return null;
  }

  if (position >= size / 2 >>> 0) {
    each<T>(tail, size, 'previous', node => {
      if (size - 1 - i === position) {
        findNode = node;
        return false;
      }
      ++i;
      return true;
    });
  } else {
    each<T>(head, size, 'next', node => {
      if (i === position) {
        findNode = node;
        return false;
      }
      i++;
      return true;
    });
  }
  return findNode;
}
