import { interfaces } from '../../types';
import { Comparator } from '../../utils';
import {
  find,
  findMax,
  findMin,
  findReplaceNode,
  insert,
  removeChild,
  traverseAfterOrder,
  traverseInOrder,
  traverseLevelOrder,
  traversePreOrder,
} from './utils';

export class BinarySearchTreeNode<T = unknown> implements interfaces.BinarySearchTreeNode<T> {
  constructor(value: T | null = null) {
    this.value = value;
  }

  public left: interfaces.BinarySearchTreeNode<T> | null = null;

  public right: interfaces.BinarySearchTreeNode<T> | null = null;

  public parent: interfaces.BinarySearchTreeNode<T> | null = null;

  public value: T;

  public color: interfaces.RED_BLACK_TREE_COLOR = interfaces.RED_BLACK_TREE_COLOR.red;
}

export class BinarySearchTree<T = unknown> implements interfaces.BinarySearchTree<T> {
  constructor(compare?: interfaces.CompareParams<T>, isFindMin = true) {
    this.comparator = new Comparator<T>(compare);
    this.isFindMin = isFindMin;
  }

  private readonly isFindMin: boolean;

  public root: interfaces.BinarySearchTreeNode<T> | null = null;

  public setRoot = (root: interfaces.BinarySearchTreeNode<T> | null): void => {
    this.root = root;
  };

  public readonly comparator: interfaces.Comparator<T>;

  public insert(value: T): interfaces.BinarySearchTreeNode<T> | null {
    return insert(this.root, value, this.comparator, (root) => {
      this.root = root;
    });
  }

  public find(value: T): interfaces.BinarySearchTreeNode<T> | null {
    return find(this.root, value, this.comparator);
  }

  public contains(value: T): boolean {
    return Boolean(this.find(value));
  }

  public remove(value: T): interfaces.BinarySearchTreeNode<T> | null {
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

  public findMin(): interfaces.BinarySearchTreeNode<T> | null {
    return findMin(this.root);
  }

  public findMax(): interfaces.BinarySearchTreeNode<T> | null {
    return findMax(this.root);
  }

  public traversePreOrder(): T[] {
    const result: T[] = [];
    this.traversePreOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traversePreOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    traversePreOrder(this.root, callback);
  }

  public traverseInOrder(): T[] {
    const result: T[] = [];
    this.traverseInOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseInOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    traverseInOrder(this.root, callback);
  }

  public traverseAfterOrder(): T[] {
    const result: T[] = [];
    this.traverseAfterOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseAfterOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    return traverseAfterOrder(this.root, callback);
  }

  public traverseLevelOrder(): T[] {
    const result: T[] = [];
    this.traverseLevelOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseLevelOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    traverseLevelOrder(this.root, callback);
  }

  public toString(): string {
    return this.traverseInOrder().toString();
  }
}
