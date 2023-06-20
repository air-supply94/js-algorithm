// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace interfaces {
  export interface CircularQueue {
    enQueue: (value: number) => boolean;
    deQueue: () => boolean;
    Front: () => number;
    Rear: () => number;
    isEmpty: () => boolean;
    isFull: () => boolean;
  }

  export interface Difference {
    add: (start: number, end: number, value: number) => void;
    toArray: () => number[];
  }

  export interface MonotonicQueue {
    push: (x: number) => void;
    pop: (x: number) => void;
    max: () => number;
  }

  export interface TrieNode {
    wordCount: number;
    prefixCount: number;
    isCompleteWord: boolean;
    character: string;
    children: Map<string, TrieNode>;
    getChild: (character: string) => TrieNode | undefined;
    addChild: (character: string) => TrieNode;
    hasChild: (character: string) => boolean;
    suggestChildren: () => string[];
    toString: () => string;
  }

  export interface Trie {
    root: interfaces.TrieNode;
    addWord: (word: string) => void;
    suggestNextCharacters: (word: string) => string[];
    doesWordExist: (word: string) => boolean;
  }

  export interface SkipListNode<T = unknown> {
    data: T;
    left: SkipListNode<T> | null;
    right: SkipListNode<T> | null;
    up: SkipListNode<T> | null;
    down: SkipListNode<T> | null;
  }

  export interface SkipList<T = unknown> {
    head: SkipListNode<T>;
    tail: SkipListNode<T>;
    appendNode: (previousNode: SkipListNode<T>, newNode: SkipListNode<T>) => void;
    addLevel: () => void;
    search: (data: T) => T | null;
    insert: (data: T) => boolean;
    remove: (data: T) => boolean;
    toArray: () => T[];
  }

  export interface SegmentTree {
    rangeQuery: (queryLeftIndex: number, queryRightIndex: number) => number;
  }

  export interface FenwickTree {
    increase: (position: number, value: number) => void;
    query: (position: number) => number;
    queryRange: (leftIndex: number, rightIndex: number) => number;
  }

  export interface Heap<T = unknown> {
    heapContainer: T[];
    peek: () => T | undefined;
    poll: () => T | undefined;
    add: (item: T) => void;
    isEmpty: () => boolean;
    up: (startIndex?: number) => void;
    down: (startIndex?: number) => void;
  }

  export interface BloomFilter {
    insert: (item: string) => void;
    contain: (item: string) => boolean;
  }
}
