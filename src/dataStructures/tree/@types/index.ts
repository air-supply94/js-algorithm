import { HashTable } from '../../hashTable';
import { Comparator } from '../../../utils/comparator';
import { compareFunctionType } from '../../../utils/@types';

export interface InterfaceBinaryTreeNode<T> {
  readonly leftHeight: number;
  readonly rightHeight: number;
  readonly height: number;
  readonly balanceFactor: number;
  readonly uncle: null | InterfaceBinaryTreeNode<T>;
  left: null | InterfaceBinaryTreeNode<T>;
  right: null | InterfaceBinaryTreeNode<T>;
  parent: null | InterfaceBinaryTreeNode<T>;
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
  left: null | InterfaceBinarySearchTreeNode<T>;
  right: null | InterfaceBinarySearchTreeNode<T>;
  parent: null | InterfaceBinarySearchTreeNode<T>;
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

export interface InterfaceAvlTree<T> {
  readonly root: InterfaceBinarySearchTreeNode<T>;
  toString(): string;
  contains(value?: any): boolean;
  insert(value: T): boolean;
  remove(value?: any): boolean;
  balance(node: InterfaceBinarySearchTreeNode<T>): this;
  rotateLeftLeft(rootNode: InterfaceBinarySearchTreeNode<T>): this;
  rotateLeftRight(rootNode: InterfaceBinarySearchTreeNode<T>): this;
  rotateRightLeft(rootNode: InterfaceBinarySearchTreeNode<T>): this;
  rotateRightRight(rootNode: InterfaceBinarySearchTreeNode<T>): this;
}
