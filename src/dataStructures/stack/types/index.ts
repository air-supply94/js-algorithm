export interface StackInterface<T = unknown> {
  size: number;
  toString(callback?: (value: T) => string): string;
  toArray(): T[];
  pop(): T | null;
  push(value: T): this;
  peek(): T | null;
  clear(): this;
  has(key?: T): boolean;
  isEmpty(): boolean;
}
