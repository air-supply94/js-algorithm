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
    root: TrieNode;
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

  export interface DoubleLinkedListNode<T = unknown> {
    value: T | null;
    next: DoubleLinkedListNode<T> | null;
    previous: DoubleLinkedListNode<T> | null;
  }

  export interface DoubleLinkedList<T = unknown> {
    comparator: Comparator<T>;
    head: DoubleLinkedListNode<T> | null;
    tail: DoubleLinkedListNode<T> | null;
    size: number;
    clear: () => void;
    isEmpty: () => boolean;
    toArray: () => Array<DoubleLinkedListNode<T>>;
    fromArray: (values: T[]) => void;
    append: (value: T) => DoubleLinkedListNode<T>;
    prepend: (value: T) => DoubleLinkedListNode<T>;
    deleteHead: () => DoubleLinkedListNode<T> | null;
    deleteTail: () => DoubleLinkedListNode<T> | null;
    appendNode: (node: interfaces.DoubleLinkedListNode<T>) => interfaces.DoubleLinkedListNode<T>;
    prependNode: (node: interfaces.DoubleLinkedListNode<T>) => interfaces.DoubleLinkedListNode<T>;
  }

  export enum RED_BLACK_TREE_COLOR {
    red = 0,
    black = 1,
  }

  export interface BinarySearchTreeNode<T = unknown> {
    left: BinarySearchTreeNode<T> | null;
    right: BinarySearchTreeNode<T> | null;
    parent: BinarySearchTreeNode<T> | null;
    value: T;
    color: RED_BLACK_TREE_COLOR;
  }

  export type BinarySearchTreeTraverseCallback<T = unknown> = (node: BinarySearchTreeNode<T>, height?: number) => boolean | void;

  export interface BinarySearchTree<T = unknown> {
    root: BinarySearchTreeNode<T> | null;
    setRoot: (root: (BinarySearchTreeNode<T> | null)) => void;
    comparator: Comparator<T>;
    insert: (value: T) => BinarySearchTreeNode<T> | null;
    find: (value: T) => BinarySearchTreeNode<T> | null;
    contains: (value: T) => boolean;
    remove: (value: T) => BinarySearchTreeNode<T> | null;
    findMin: () => BinarySearchTreeNode<T> | null;
    findMax: () => BinarySearchTreeNode<T> | null;
    traversePreOrder: () => T[];
    traversePreOrderCallback: (callback: BinarySearchTreeTraverseCallback<T>) => void;
    traverseInOrder: () => T[];
    traverseInOrderCallback: (callback: BinarySearchTreeTraverseCallback<T>) => void;
    traverseAfterOrder: () => T[];
    traverseAfterOrderCallback: (callback: BinarySearchTreeTraverseCallback<T>) => void;
    traverseLevelOrder: () => T[];
    traverseLevelOrderCallback: (callback: BinarySearchTreeTraverseCallback<T>) => void;
    toString: () => string;
  }

  export type AvlTree<T = unknown> = BinarySearchTree<T>;

  export type RedBlackTree<T = unknown> =BinarySearchTree<T>;

  export interface Comparator<T = unknown> {
    equal: (a?: T, b?: T) => boolean;
    notEqual: (a?: T, b?: T) => boolean;
    lessThan: (a?: T, b?: T) => boolean;
    greaterThan: (a?: T, b?: T) => boolean;
    lessThanOrEqual: (a?: T, b?: T) => boolean;
    greaterThanOrEqual: (a?: T, b?: T) => boolean;
  }

  export type CompareFunction<T = unknown> = (a?: T, b?: T) => 0 | 1 | -1;
  export type CompareParams<T = unknown> = Comparator<T> | CompareFunction<T>;
}
