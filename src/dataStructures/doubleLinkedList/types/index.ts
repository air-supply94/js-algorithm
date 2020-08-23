export type eachCallback<T = unknown> = (node: DoubleLinkedListNodeInterface<T>) => void | boolean;
export type toStringCallback<T = unknown> = (value: T) => string;

export interface FindParams<T = unknown> {
  value?: T;
  callback?: (value: T) => boolean | void;
}

export interface DoubleLinkedListNodeInterface<T = unknown> {
  value: T;
  next: null | DoubleLinkedListNodeInterface<T>;
  previous: null | DoubleLinkedListNodeInterface<T>;
  toString: (callback?: toStringCallback<T>) => string;
  setValue: (value: T) => this;
  setNext: (node: DoubleLinkedListNodeInterface<T> | null) => this;
  setPrevious: (node: DoubleLinkedListNodeInterface<T> | null) => this;
}

export interface DoubleLinkedListInterface<T = unknown> {
  head: null | DoubleLinkedListNodeInterface<T>;
  tail: null | DoubleLinkedListNodeInterface<T>;
  size: number;
  eachFromHead: (callback: eachCallback<T>) => void;
  eachFromTail: (callback: eachCallback<T>) => void;
  toArray: () => Array<DoubleLinkedListNodeInterface<T>>;
  fromArray: (values: T[]) => this;
  deleteHead: () => null | DoubleLinkedListNodeInterface<T>;
  deleteTail: () => null | DoubleLinkedListNodeInterface<T>;
  find: (params: FindParams) => null | DoubleLinkedListNodeInterface<T>;
  deleteAll: (value?: T) => null | DoubleLinkedListNodeInterface<T>;
  delete: (value?: T) => null | DoubleLinkedListNodeInterface<T>;
  get: (index: number) => null | DoubleLinkedListNodeInterface<T>;
  insert: (value: T, index: number) => DoubleLinkedListNodeInterface<T>;
  append: (value: T) => DoubleLinkedListNodeInterface<T>;
  prepend: (value: T) => DoubleLinkedListNodeInterface<T>;
  has: (value?: T) => boolean;
  isEmpty: () => boolean;
  reverse: () => this;
  connect: (...args: Array<DoubleLinkedListInterface<T>>) => this;
  deleteIndex: (index: number) => null | DoubleLinkedListNodeInterface<T>;
  setSize: (size: number) => this;
  setHead: (head: DoubleLinkedListNodeInterface<T> | null) => this;
  setTail: (tail: DoubleLinkedListNodeInterface<T> | null) => this;
  clear: () => this;
  sort: () => this;
  toString: (callback?: toStringCallback<T>) => string;
}
