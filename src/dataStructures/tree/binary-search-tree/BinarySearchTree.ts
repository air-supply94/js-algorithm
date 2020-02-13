import { BinarySearchTreeNode } from './BinarySearchTreeNode';
import { compareFunctionType } from '../../../utils/@types';
import { Comparator } from '../../../utils/comparator';

export class BinarySearchTree<T> {
  constructor(nodeValueCompareFunction?: compareFunctionType) {
    this.root = new BinarySearchTreeNode<T>(null, nodeValueCompareFunction);
    this.nodeComparator = this.root.nodeComparator;
  }

  public root: BinarySearchTreeNode<T>;
  public nodeComparator: Comparator;

  public insert(value: T): null | BinarySearchTreeNode<T> {
    return this.root.insert(value);
  }

  public contains(value?: any): boolean {
    return this.root.contains(value);
  }

  public remove(value?: any): boolean {
    return this.root.remove(value);
  }

  public toString(): string {
    return this.root.toString();
  }
}
