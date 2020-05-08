export interface LinkedHashTableItemInterface<T = unknown, K = unknown> {
  key: T;
  value: K;
  hash: number;
}

export interface LinkedHashTableInterface<T = unknown, K = unknown> {
  set(key: T, value: K): this;
  delete(key: T): K | null;
  get(key: T): K | null;
  has(key: T): boolean;
}
