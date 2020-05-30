import { DoubleLinkedListInterface } from '../types';
import { detectCircle } from './detectCircle';

export function hasCircle(doubleLinkedList: DoubleLinkedListInterface): boolean {
  return Boolean(detectCircle(doubleLinkedList.head, 'next')) || Boolean(detectCircle(doubleLinkedList.tail, 'previous'));
}
