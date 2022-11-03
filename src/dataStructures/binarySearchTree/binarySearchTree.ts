import type { Compare } from '../../utils';
import { Comparator } from '../../utils';
import { find, findMax, findMin, findReplaceNode, insert, removeChild, traverseAfterOrder, traverseInOrder, traverseLevelOrder, traversePreOrder } from './utils';

export enum COLOR_TYPE {
  red = 0,
  black = 1,
}

export class BinarySearchTreeNode<T = unknown> {
  constructor(value: T | null = null) {
    this.value = value;
  }

  public left: BinarySearchTreeNode<T> | null = null;

  public right: BinarySearchTreeNode<T> | null = null;

  public parent: BinarySearchTreeNode<T> | null = null;

  public value: T;

  public color: COLOR_TYPE = COLOR_TYPE.red;
}

export type traverseCallback<T = unknown> = (node: BinarySearchTreeNode<T>, height?: number) => boolean | void;

export class BinarySearchTree<T = unknown> {
  constructor(compare?: Compare<T>, isFindMin = true) {
    this.comparator = new Comparator<T>(compare);
    this.isFindMin = isFindMin;
  }

  private readonly isFindMin: boolean;

  public root: BinarySearchTreeNode<T> | null = null;

  public readonly comparator: Comparator<T>;

  public insert(value: T): BinarySearchTreeNode<T> | null {
    return insert(this.root, value, this.comparator, (root: BinarySearchTreeNode<T> | null) => this.root = root);
  }

  public find(value: T): BinarySearchTreeNode<T> | null {
    return find(this.root, value, this.comparator);
  }

  public contains(value: T): boolean {
    return Boolean(this.find(value));
  }

  public remove(value: T): BinarySearchTreeNode<T> | null {
    const replaceNode = findReplaceNode(this.root, value, this.comparator, this.isFindMin);
    if (replaceNode) {
      if (replaceNode.parent == null) {
        this.root = null;
      } else {
        const parent = replaceNode.parent;
        removeChild(parent, replaceNode);
        replaceNode.parent = parent;
      }
    }

    return replaceNode;
  }

  public findMin(): BinarySearchTreeNode<T> | null {
    return findMin(this.root);
  }

  public findMax(): BinarySearchTreeNode<T> | null {
    return findMax(this.root);
  }

  public traversePreOrder(): T[] {
    const result: T[] = [];
    this.traversePreOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traversePreOrderCallback(callback: traverseCallback<T>): void {
    traversePreOrder(this.root, callback);
  }

  public traverseInOrder(): T[] {
    const result: T[] = [];
    this.traverseInOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseInOrderCallback(callback: traverseCallback<T>): void {
    traverseInOrder(this.root, callback);
  }

  public traverseAfterOrder(): T[] {
    const result: T[] = [];
    this.traverseAfterOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseAfterOrderCallback(callback: traverseCallback<T>): void {
    return traverseAfterOrder(this.root, callback);
  }

  public traverseLevelOrder(): T[] {
    const result: T[] = [];
    this.traverseLevelOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseLevelOrderCallback(callback: traverseCallback<T>): void {
    traverseLevelOrder(this.root, callback);
  }

  public toString(): string {
    return this.traverseInOrder()
      .toString();
  }
}
