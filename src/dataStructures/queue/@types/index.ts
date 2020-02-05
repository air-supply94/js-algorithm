import {
  InterfaceDoubleLinkedList,
  InterfaceDoubleLinkedListNode,
} from '../../doubleLinkedList/@types';

export interface InterfaceQueue<T> {
  doubleLinkedList: InterfaceDoubleLinkedList<T>;
  size: number;
  toString: (callback?: (node: InterfaceDoubleLinkedListNode<T>) => string) => string;
  dequeue: () => any;
  enqueue: (value?: any) => this;
  peek: () => any;
  clear: () => this;
  has: (value?: any) => boolean;
  isEmpty: () => boolean;
}
