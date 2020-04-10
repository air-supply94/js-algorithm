import { toStringCallback } from '../../doubleLinkedList/types';

export interface StackInterface<T = unknown> {
  size: number;
  toString(callback?: toStringCallback<T>): string;
  toArray(): T[];
  pop(): T | null;
  push(value: T): T;
  peek(): T | null;
  clear(): this;
  has(key?: T): boolean;
  isEmpty(): boolean;
}
