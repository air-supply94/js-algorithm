import { BinarySearchTreeNode } from './BinarySearchTreeNode';
import { compareFunctionType } from '../../../utils/@types';
import { Comparator } from '../../../utils/comparator';

export class BinarySearchTree<T> {

  get root(): BinarySearchTreeNode<T> {
    return this._root;
  }

  constructor(nodeValueCompareFunction?: compareFunctionType) {
    this._root = new BinarySearchTreeNode<T>(null, nodeValueCompareFunction);
    this.nodeComparator = this.root.nodeComparator;
  }

  private _root: BinarySearchTreeNode<T>;
  public nodeComparator: Comparator;

  public setRoot(root: BinarySearchTreeNode<T>): this {
    this._root = root;
    return this;
  }

  public insert(value: T): null | BinarySearchTreeNode<T> {
    return this.root.insert(value);
  }

  public contains(value?: T): boolean {
    return this.root.contains(value);
  }

  public remove(value?: T): boolean {
    return this.root.remove(value);
  }

  public toString(): string {
    return this.root.toString();
  }
}
