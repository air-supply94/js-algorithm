export interface InterfaceStack<T> {
  size: number;
  toString: (callback?: Function) => string;
  toArray: () => any[];
  pop: () => any;
  push: (value?: any) => this;
  peek: () => any;
  clear: () => this;
  has: (key?: any) => boolean;
  isEmpty: () => boolean;
}
