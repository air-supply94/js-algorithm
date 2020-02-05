export interface InterfaceQueue<T> {
  size: number;
  toString: (callback?: (node: T) => string) => string;
  dequeue: () => T;
  enqueue: (value: T) => this;
  peek: () => T;
  clear: () => this;
  has: (value?: any) => boolean;
  isEmpty: () => boolean;
}
