export interface InterfaceHasTable<T> {
  set: (key: string, value: T) => this;
  delete: (key: string) => T | null;
  get: (key: string) => T | null;
  has: (key: string) => boolean;
  getKeys: () => string[];
}
