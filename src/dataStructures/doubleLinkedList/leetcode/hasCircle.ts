import { DoubleLinkedListInterface } from '../types';
import { detectCircle } from './detectCircle';

export function hasCircle<T = unknown>(doubleLinkedList: DoubleLinkedListInterface<T>): boolean {
  return Boolean(detectCircle<T>(doubleLinkedList.head, 'next')) || Boolean(detectCircle(doubleLinkedList.tail, 'previous'));
}
