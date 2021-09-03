export interface DisjointSetInterface<T = unknown> {
  keyCallback?: (item: T) => string;
  items: {[key: string]: DisjointSetItemInterface<T>; };
  makeSet: (itemValue: T) => this;
  find: (itemValue: T) => null | string;
  union: (valueA: T, valueB: T) => null | string;
  inSameSet: (valueA: T, valueB: T) => boolean;
}

export interface DisjointSetItemInterface<T = unknown> {
  value: T;
  keyCallback: (item: string | T) => string;
  parent: DisjointSetItemInterface<T> | null;
  children: {[key: string]: DisjointSetItemInterface<T>; };
  getKey: () => string;
  getRoot: () => DisjointSetItemInterface<T>;
  isRoot: () => boolean;
  getRank: () => number;
  getChildren: () => Array<DisjointSetItemInterface<T>>;
  setParent: (parentItem: DisjointSetItemInterface<T> | null) => DisjointSetItemInterface<T>;
  addChild: (childItem: DisjointSetItemInterface<T>) => DisjointSetItemInterface<T>;
}
