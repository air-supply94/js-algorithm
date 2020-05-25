export interface PriorityQueueItem<T = unknown> {
  value: T;
  priority: number;
}

export interface PriorityQueueInterface<T = unknown> {
  isEmpty(): boolean;
  sort(): T[];
  poll(): T | undefined;
  peek(): T | undefined;
  add(value: T, priority?: number): this;
  removeAll(value: T): T[];
  changeAllPriority(value: T, priority: number): this;
  has(value: T): boolean;
}
