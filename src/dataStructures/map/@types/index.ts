import { InterfaceDoubleLinkedListNode } from '../../doubleLinkedList/@types';

export interface InterfaceMap {
  size: number;
  delete: (key?: any) => this;
  set: (key?: any, value?: any) => this;
  forEach: (callback?: (value: InterfaceDoubleLinkedListNode<any>, key: InterfaceDoubleLinkedListNode<any>) => void) => this;
  entries: () => [any, any][];
  values: () => any[];
  keys: () => any[];
  clear: () => this;
  get: (key?: any) => any;
  has: (key?: any) => boolean;
}
