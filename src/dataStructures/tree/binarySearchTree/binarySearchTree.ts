import { Comparator, compareFunctionType } from '../../../utils';
import { find, findMax, findMin, findReplaceNode, insert, traverseAfterOrder, traverseInOrder, traverseLevelOrder, traversePreOrder } from './utils';

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

  public setValue(value: T): this {
    this.value = value;
    return this;
  }

  public setParent(parent: null | BinarySearchTreeNode<T>): this {
    this.parent = parent;
    return this;
  }

  public setLeft(node: BinarySearchTreeNode<T> | null): this {
    if (this.left) {
      this.left.setParent(null);
    }

    this.left = node;

    if (this.left) {
      this.left.setParent(this);
    }

    return this;
  }

  public setRight(node: BinarySearchTreeNode<T> | null): this {
    if (this.right) {
      this.right.setParent(null);
    }

    this.right = node;

    if (this.right) {
      this.right.setParent(this);
    }

    return this;
  }

  public removeChild(nodeToRemove: BinarySearchTreeNode<T>): boolean {
    if (!nodeToRemove) {
      return false;
    }

    if (nodeToRemove === this.left) {
      this.setLeft(null);
      return true;
    } else if (nodeToRemove === this.right) {
      this.setRight(null);
      return true;
    } else {
      return false;
    }
  }

  public replaceChild(
    nodeToReplace: BinarySearchTreeNode<T>,
    replacementNode: BinarySearchTreeNode<T>
  ): boolean {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left === nodeToReplace) {
      this.setLeft(replacementNode);
      return true;
    } else if (this.right === nodeToReplace) {
      this.setRight(replacementNode);
      return true;
    } else {
      return false;
    }
  }

  public toString(): string {
    const result = [];
    traverseInOrder(this, (node) => {
      result.push(node.value);
    });

    return result.toString();
  }
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
      tmpNode.setValue(replaceNode.value);
      replaceNode.setValue(tmpValue);
    }
  ) {
    this.comparator = new Comparator(compareFunction);
    this.swap = swap;
    this.isFindMin = isFindMin;
    this._root = null;
  }

  private readonly isFindMin: boolean;

  private readonly swap: (
    tmpNode: BinarySearchTreeNode<T>,
    replaceNode: BinarySearchTreeNode<T>,
  ) => void;

  private _root: BinarySearchTreeNode<T> | null;

  public readonly comparator: Comparator;

  public get root(): BinarySearchTreeNode<T> | null {
    return this._root;
  }

  public setRoot(root: BinarySearchTreeNode<T> | null): this {
    this._root = root;
    return this;
  }

  public insert(value: T): null | BinarySearchTreeNode<T> {
    return insert<T>(this.root, value, this.comparator, this.setRoot.bind(this));
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
        this.setRoot(null);
      } else {
        const parent = replaceNode.parent;
        parent.removeChild(replaceNode);
        replaceNode.setParent(parent);
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
