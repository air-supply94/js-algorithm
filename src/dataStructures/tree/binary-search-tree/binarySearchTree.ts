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
  traverseAfterOrder,
  traverseLevelOrder,
  traversePreOrder,
} from './utils';
import {
  BinarySearchTreeInterface,
  BinarySearchTreeNodeInterface,
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
    return traversePreOrder(this.root);
  }

  public traverseInOrder(): T[] {
    return traverseInOrder(this.root);
  }

  public traverseAfterOrder(): T[] {
    return traverseAfterOrder(this.root);
  }

  public traverseLevelOrder(): T[] {
    return traverseLevelOrder(this.root);
  }

  public toString(): string {
    return this.traverseInOrder()
    .toString();
  }
}
