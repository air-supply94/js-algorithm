import { DoubleLinkedListNodeInterface } from '../../doubleLinkedList/@types';

export interface InterfaceMap {
  size: number;
  delete: (key?: any) => boolean;
  set: (key?: any, value?: any) => this;
  forEach: (callback: (value: DoubleLinkedListNodeInterface<any>, key: DoubleLinkedListNodeInterface<any>) => void) => this;
  entries: () => [any, any][];
  values: () => any[];
  keys: () => any[];
  clear: () => this;
  get: (key?: any) => null | any;
  has: (key?: any) => boolean;
}
