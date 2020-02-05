export interface InterfaceStack<T> {
  size: number;
  toString: (callback?: (node: T) => string) => string;
  toArray: () => T[];
  pop: () => T;
  push: (value: T) => this;
  peek: () => T;
  clear: () => this;
  has: (key?: any) => boolean;
  isEmpty: () => boolean;
}
