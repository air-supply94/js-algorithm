import { DoubleLinkedListInterface } from '../types';
import { detectCircle } from './detectCircle';

export function hasCircle(doubleLinkedList: DoubleLinkedListInterface): boolean {
  return !!detectCircle(doubleLinkedList.head, 'next') || !!detectCircle(doubleLinkedList.tail, 'previous');
}
