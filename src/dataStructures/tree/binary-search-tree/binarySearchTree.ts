import {
  Comparator,
  compareFunctionType,
} from '../../../utils';
import {
  find,
  findMax,
  findMin,
  insert,
  remove,
  traverseInOrder,
  traverseLevelOrder,
  traverseAfterOrder,
  traversePreOrder,
} from './utils';
import {
  BinarySearchTreeInterface,
  BinarySearchTreeNodeInterface,
  traverseCallback,
} from './types';

export class BinarySearchTree<T = unknown> implements BinarySearchTreeInterface<T> {
  constructor(compareFunction?: compareFunctionType | Comparator) {
    this._comparator = new Comparator(compareFunction);
  }

  private readonly _comparator: Comparator;
  private _root: BinarySearchTreeNodeInterface<T> | null = null;

  get comparator() {
    return this._comparator;
  }

  get root(): BinarySearchTreeNodeInterface<T> | null {
    return this._root;
  }

  public setRoot(root: BinarySearchTreeNodeInterface<T> | null): this {
    this._root = root;
    return this;
  }

  public insert(value: T): null | BinarySearchTreeNodeInterface<T> {
    return insert<T>(this.root, value, this.comparator, this.setRoot.bind(this));
  }

  public find(value: T): null | BinarySearchTreeNodeInterface<T> {
    return find<T>(this.root, value, this.comparator);
  }

  public contains(value: T): boolean {
    return !!this.find(value);
  }

  public remove(value: T): boolean {
    return remove<T>(this.root, value, this.comparator, this.setRoot.bind(this, null));
  }

  public findMin(): null | BinarySearchTreeNodeInterface<T> {
    return findMin<T>(this.root);
  }

  public findMax(): null | BinarySearchTreeNodeInterface<T> {
    return findMax<T>(this.root);
  }

  public traversePreOrder(): T[] {
    const result = [];
    this.traversePreOrderCallback(function (node) {
      result.push(node.value);
    });
    return result;

  }

  public traversePreOrderCallback(callback: traverseCallback<T>): void {
    traversePreOrder<T>(this.root, callback);
  }

  public traverseInOrder(): T[] {
    const result = [];
    this.traverseInOrderCallback(function (node) {
      result.push(node.value);
    });
    return result;
  }

  public traverseInOrderCallback(callback: traverseCallback<T>): void {
    traverseInOrder<T>(this.root, callback);
  }

  public traverseAfterOrder(): T[] {
    const result = [];
    this.traverseAfterOrderCallback(function (node) {
      result.push(node.value);
    });
    return result;
  }

  public traverseAfterOrderCallback(callback: traverseCallback<T>): void {
    return traverseAfterOrder<T>(this.root, callback);
  }

  public traverseLevelOrder(): T[] {
    const result = [];
    this.traverseLevelOrderCallback(function (node) {
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
