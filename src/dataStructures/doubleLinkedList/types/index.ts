import { DoubleLinkedListNode } from '../doubleLinkedList';

export type eachCallback<T = unknown> = (node: DoubleLinkedListNode<T>) => void | boolean;
export type toStringCallback<T = unknown> = (value: T) => string;

export interface FindParams<T = unknown> {
  value?: T;
  callback?: (value: T) => boolean | void;
}

