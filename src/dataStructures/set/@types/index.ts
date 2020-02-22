import { InterfaceDoubleLinkedListNode } from '../../doubleLinkedList/@types';

export interface InterfaceSet {
  size: number;
  add: (value?: any) => this;
  delete: (value?: any) => boolean;
  forEach: (callback: (value: InterfaceDoubleLinkedListNode<any>, key: InterfaceDoubleLinkedListNode<any>) => void) => this;
  entries: () => [any, any][];
  values: () => any[];
  clear: () => this;
  has: (key?: any) => boolean;
}
