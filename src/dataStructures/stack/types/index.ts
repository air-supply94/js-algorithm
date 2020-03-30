export interface StackInterface<T = unknown> {
  size: number;
  toString: (callback?: (value: T) => string) => string;
  toArray: () => T[];
  pop: () => T;
  push: (value: T) => this;
  peek: () => T;
  clear: () => this;
  has: (key?: T) => boolean;
  isEmpty: () => boolean;
}
