export interface QueueInterface<T> {
  size: number;
  toString: (callback?: (value: T) => string) => string;
  dequeue: () => T;
  enqueue: (value?: T) => this;
  peek: () => T;
  clear: () => this;
  has: (value: T) => boolean;
  isEmpty: () => boolean;
}
