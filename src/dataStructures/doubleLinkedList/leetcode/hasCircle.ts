import { DoubleLinkedList } from '../doubleLinkedList';
import { detectCircle } from './detectCircle';

export function hasCircle<T = unknown>(doubleLinkedList: DoubleLinkedList<T>): boolean {
  return Boolean(detectCircle<T>(doubleLinkedList.head, 'next')) || Boolean(detectCircle(doubleLinkedList.tail, 'previous'));
}
