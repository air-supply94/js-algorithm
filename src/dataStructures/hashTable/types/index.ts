export interface LinkedHashTableItemInterface<T = unknown> {
  key: string;
  value: T;
  hash: number;
}

export interface LinkedHashTableInterface<T = unknown> {
  set: (key: string | number, value: T) => T;
  delete: (key: string | number) => T | null;
  get: (key: string | number) => T | null;
  has: (key: string | number) => boolean;
}
