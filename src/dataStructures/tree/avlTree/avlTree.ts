import type { Comparator, compareFunctionType } from '../../../utils';
import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';
import { avlTreeBalance, BinarySearchTree } from '../binarySearchTree';

export class AvlTree<T = unknown> {
  constructor(compareFunction?: compareFunctionType | Comparator) {
    this.binarySearchTree = new BinarySearchTree<T>(compareFunction, true);
    this.setRoot = this.setRoot.bind(this);
  }

  private readonly binarySearchTree: BinarySearchTree<T>;

  public get comparator(): Comparator {
    return this.binarySearchTree.comparator;
  }

  public get root(): BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  public setRoot(root: BinarySearchTreeNode<T> | null): void {
    this.binarySearchTree.root = root;
  }

  public find(value: T): null | BinarySearchTreeNode<T> {
    return this.binarySearchTree.find(value);
  }

  public findMin(): null | BinarySearchTreeNode<T> {
    return this.binarySearchTree.findMin();
  }

  public findMax(): null | BinarySearchTreeNode<T> {
    return this.binarySearchTree.findMax();
  }

  public traversePreOrder(): T[] {
    return this.binarySearchTree.traversePreOrder();
  }

  public traversePreOrderCallback(callback: traverseCallback<T>): void {
    this.binarySearchTree.traversePreOrderCallback(callback);
  }

  public traverseInOrder(): T[] {
    return this.binarySearchTree.traverseInOrder();
  }

  public traverseInOrderCallback(callback: traverseCallback<T>): void {
    this.binarySearchTree.traverseInOrderCallback(callback);
  }

  public traverseAfterOrder(): T[] {
    return this.binarySearchTree.traverseAfterOrder();
  }

  public traverseAfterOrderCallback(callback: traverseCallback<T>): void {
    this.binarySearchTree.traverseAfterOrderCallback(callback);
  }

  public traverseLevelOrder(): T[] {
    return this.binarySearchTree.traverseLevelOrder();
  }

  public traverseLevelOrderCallback(callback: traverseCallback<T>): void {
    this.binarySearchTree.traverseLevelOrderCallback(callback);
  }

  public contains(value: T): boolean {
    return this.binarySearchTree.contains(value);
  }

  public insert(value: T): BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.insert(value);
    let currentNode = node;
    while (currentNode) {
      avlTreeBalance(currentNode, this.setRoot);
      currentNode = currentNode.parent;
    }

    return node;
  }

  public remove(value: T): BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.remove(value);
    let removeNode = node;
    while (removeNode && removeNode.parent) {
      avlTreeBalance(removeNode.parent, this.setRoot);
      removeNode = removeNode.parent;
    }
    return node;
  }

  public toString(): string {
    return this.binarySearchTree.toString();
  }
}
