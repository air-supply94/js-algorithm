import { Comparator, compareFunctionType } from '../../../utils';
import { find, findMax, findMin, findReplaceNode, insert, removeChild, traverseAfterOrder, traverseInOrder, traverseLevelOrder, traversePreOrder } from './utils';

export class BinarySearchTreeNode<T = unknown> {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;
  }

  public left: null | BinarySearchTreeNode<T>;

  public right: null | BinarySearchTreeNode<T>;

  public parent: null | BinarySearchTreeNode<T>;

  public value: T;
}

export type traverseCallback<T = unknown> = (node: BinarySearchTreeNode<T>, height?: number) => void | boolean;

export class BinarySearchTree<T = unknown> {
  constructor(
    compareFunction?: compareFunctionType | Comparator,
    isFindMin = true,
    swap = function(
      tmpNode: BinarySearchTreeNode<T>,
      replaceNode: BinarySearchTreeNode<T>
    ): void {
      const tmpValue = tmpNode.value;
      tmpNode.value = replaceNode.value;
      replaceNode.value = tmpValue;
    }
  ) {
    this.comparator = new Comparator(compareFunction);
    this.swap = swap;
    this.isFindMin = isFindMin;
    this.root = null;
  }

  private readonly isFindMin: boolean;

  private readonly swap: (
    tmpNode: BinarySearchTreeNode<T>,
    replaceNode: BinarySearchTreeNode<T>,
  ) => void;

  public root: BinarySearchTreeNode<T> | null;

  public readonly comparator: Comparator;

  public insert(value: T): null | BinarySearchTreeNode<T> {
    return insert<T>(this.root, value, this.comparator, (root: BinarySearchTreeNode<T> | null) => this.root = root);
  }

  public find(value: T): null | BinarySearchTreeNode<T> {
    return find<T>(this.root, value, this.comparator);
  }

  public contains(value: T): boolean {
    return Boolean(this.find(value));
  }

  public remove(value: T): BinarySearchTreeNode<T> | null {
    const replaceNode = findReplaceNode<T>(this.root, value, this.comparator, this.isFindMin, this.swap);
    if (replaceNode) {
      if (!replaceNode.parent) {
        this.root = null;
      } else {
        const parent = replaceNode.parent;
        removeChild(parent, replaceNode);
        replaceNode.parent = parent;
      }
    }

    return replaceNode;
  }

  public findMin(): null | BinarySearchTreeNode<T> {
    return findMin<T>(this.root);
  }

  public findMax(): null | BinarySearchTreeNode<T> {
    return findMax<T>(this.root);
  }

  public traversePreOrder(): T[] {
    const result = [];
    this.traversePreOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traversePreOrderCallback(callback: traverseCallback<T>): void {
    traversePreOrder<T>(this.root, callback);
  }

  public traverseInOrder(): T[] {
    const result = [];
    this.traverseInOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseInOrderCallback(callback: traverseCallback<T>): void {
    traverseInOrder<T>(this.root, callback);
  }

  public traverseAfterOrder(): T[] {
    const result = [];
    this.traverseAfterOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseAfterOrderCallback(callback: traverseCallback<T>): void {
    return traverseAfterOrder<T>(this.root, callback);
  }

  public traverseLevelOrder(): T[] {
    const result = [];
    this.traverseLevelOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseLevelOrderCallback(callback: traverseCallback<T>): void {
    traverseLevelOrder<T>(this.root, callback);
  }

  public toString(): string {
    return this.traverseInOrder()
      .toString();
  }
}
