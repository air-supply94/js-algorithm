export interface InterfaceDoubleLinkedListNode<T> {
  value: T;
  next: null | InterfaceDoubleLinkedListNode<T>;
  previous: null | InterfaceDoubleLinkedListNode<T>;
  toString: (callback?: (node: T) => string) => string;
  setValue(value: T): this;
  setNext(node: InterfaceDoubleLinkedListNode<T> | null): this;
  setPrevious(node: InterfaceDoubleLinkedListNode<T> | null): this;
}

export interface InterfaceDoubleLinkedList<T> {
  head: null | InterfaceDoubleLinkedListNode<T>;
  tail: null | InterfaceDoubleLinkedListNode<T>;
  size: number;
  clear: () => this;
  toString: (callback?: (node: T) => string) => string;
  eachFromHead: (callback: (node: InterfaceDoubleLinkedListNode<T>) => void) => this;
  eachFromTail: (callback: (node: InterfaceDoubleLinkedListNode<T>) => void) => this;
  toArray: () => InterfaceDoubleLinkedListNode<T>[];
  fromArray: (values: T[]) => this;
  deleteHead: () => null | InterfaceDoubleLinkedListNode<T>;
  deleteTail: () => null | InterfaceDoubleLinkedListNode<T>;
  find: (params: { value?: T; callback?: (node: T) => boolean }) => null | InterfaceDoubleLinkedListNode<T>;
  delete: (value: T) => null | InterfaceDoubleLinkedListNode<T>;
  append: (value: T) => this;
  prepend: (value: T) => this;
  has: (value?: any) => boolean;
  isEmpty: () => boolean;
  reverse: () => this;
  connect: (...args: InterfaceDoubleLinkedList<T>[]) => this;
}
