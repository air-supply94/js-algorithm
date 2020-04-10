export interface LinkedHasTableInterface<T = unknown, K = unknown> {
  readonly keys: T[];
  set(key: T, value: K): this;
  delete(key: T): K | null;
  get(key: T): K | null;
  has(key: T): boolean;
}
