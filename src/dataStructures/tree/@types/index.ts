import { HashTable } from '../../hashTable';
import { Comparator } from '../../../utils/comparator';
import { compareFunctionType } from '../../../utils/@types';

export interface InterfaceBinaryTreeNode<T> {
  readonly leftHeight: number;
  readonly rightHeight: number;
  readonly height: number;
  readonly balanceFactor: number;
  readonly uncle: null | InterfaceBinaryTreeNode<T>;
  left: InterfaceBinaryTreeNode<T>;
  right: InterfaceBinaryTreeNode<T>;
  parent: InterfaceBinaryTreeNode<T>;
  value: T;
  meta: HashTable<T>;
  nodeComparator: Comparator;
  setValue(value: T): this;
  setLeft(node: InterfaceBinaryTreeNode<T>): this;
  setRight(node: InterfaceBinaryTreeNode<T>): this;
  removeChild(nodeToRemove: InterfaceBinaryTreeNode<T>): boolean;
  replaceChild(nodeToReplace: InterfaceBinaryTreeNode<T>, replacementNode: InterfaceBinaryTreeNode<T>): boolean;
  traverseInOrder(): T[];
  traversePreOrder(): T[];
  traverseAfterOrder(): T[];
  traverseLevelOrder(): T[];
  toString(): string;
}

export interface InterfaceBinarySearchTreeNode<T> extends InterfaceBinaryTreeNode<T> {
  compareFunction: compareFunctionType;
  nodeValueComparator: Comparator;
  insert(value: T): null | InterfaceBinarySearchTreeNode<T>;
  find(value?: any): null | InterfaceBinarySearchTreeNode<T>;
  contains(value?: any): boolean;
  remove(value?: any): boolean;
  findMin(): InterfaceBinarySearchTreeNode<T>;
}

export interface InterfaceBinarySearchTree<T> {
  root: InterfaceBinarySearchTreeNode<T>;
  nodeComparator: Comparator;
  insert(value: T): null | InterfaceBinarySearchTreeNode<T>;
  contains(value?: any): boolean;
  remove(value?: any): boolean;
  toString(): string;
}
