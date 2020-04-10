export interface PriorityQueueItem<T = unknown> {
  value: T;
  priority: number;
}

export interface PriorityQueueInterface<T = unknown> {
  isEmpty(): boolean;
  sort(): T[];
  poll(): PriorityQueueItem<T> | undefined;
  peek(): PriorityQueueItem<T> | undefined;
  add(value: T, priority): this;
  removeAll(value: T): PriorityQueueItem<T>[];
  changeAllPriority(value: T, priority: number): this;
  has(value: T): boolean;
}
