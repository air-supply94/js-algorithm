import { InterfaceDoubleLinkedList } from '../../doubleLinkedList/@types';

export interface InterfaceQueue {
  doubleLinkedList: InterfaceDoubleLinkedList;
  size: number;
  toString: (callback?: Function) => string;
  dequeue: () => any;
  enqueue: (value?: any) => this;
  peek: () => any;
  clear: () => this;
  has: (value?: any) => boolean;
  isEmpty: () => boolean;
}
