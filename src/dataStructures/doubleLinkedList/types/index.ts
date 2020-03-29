export interface DoubleLinkedListNodeInterface<T> {
  value: T;
  next: null | DoubleLinkedListNodeInterface<T>;
  previous: null | DoubleLinkedListNodeInterface<T>;
  toString: (callback?: (node: T) => string) => string;
  setValue(value: T): this;
  setNext(node: DoubleLinkedListNodeInterface<T> | null): this;
  setPrevious(node: DoubleLinkedListNodeInterface<T> | null): this;
}

export interface DoubleLinkedListInterface<T> {
  head: null | DoubleLinkedListNodeInterface<T>;
  tail: null | DoubleLinkedListNodeInterface<T>;
  size: number;
  eachFromHead: (callback: (node: DoubleLinkedListNodeInterface<T>) => void | boolean) => this;
  eachFromTail: (callback: (node: DoubleLinkedListNodeInterface<T>) => void | boolean) => this;
  toArray: () => DoubleLinkedListNodeInterface<T>[];
  fromArray: (values: T[]) => this;
  deleteHead: () => null | DoubleLinkedListNodeInterface<T>;
  deleteTail: () => null | DoubleLinkedListNodeInterface<T>;
  find: (params: { value?: T; callback?: (node: T) => boolean }) => null | DoubleLinkedListNodeInterface<T>;
  deleteAll: (value?: T) => null | DoubleLinkedListNodeInterface<T>;
  delete: (value?: T) => null | DoubleLinkedListNodeInterface<T>;
  get: (index: number) => null | DoubleLinkedListNodeInterface<T>;
  insert: (value: T, index: number) => this;
  append: (value: T) => this;
  prepend: (value: T) => this;
  has: (value?: T) => boolean;
  isEmpty: () => boolean;
  reverse: () => this;
  connect: (...args: DoubleLinkedListInterface<T>[]) => this;
  clear(): this;
  toString(callback?: (node: T) => string): string;
}
