export interface QueueInterface<T = unknown> {
  size: number;
  toString(callback?: (value: T) => string): string;
  toArray(): T[];
  dequeue(): T | null;
  enqueue(value: T): T;
  peek(): T | null;
  clear(): this;
  has(value?: T): boolean;
  isEmpty(): boolean;
}
