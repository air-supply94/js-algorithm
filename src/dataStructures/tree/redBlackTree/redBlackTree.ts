import type { Comparator, compareFunctionType } from '../../../utils';
import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';
import { BinarySearchTree, color, findReplaceNode, removeChild, traverseAfterOrder, traverseInOrder, traverseLevelOrder, traversePreOrder, redBlackTreeInsertBalance, redBlackTreeRemoveBalance } from '../binarySearchTree';

export class RedBlackTree<T = unknown> {
  constructor(compareFunction?: compareFunctionType | Comparator) {
    this.binarySearchTree = new BinarySearchTree<T>(compareFunction, false);
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
    const result: T[] = [];
    this.traversePreOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traversePreOrderCallback(callback: traverseCallback<T>): void {
    traversePreOrder(this.root, callback);
  }

  public traverseInOrder(): T[] {
    const result: T[] = [];
    this.traverseInOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseInOrderCallback(callback: traverseCallback<T>): void {
    traverseInOrder(this.root, callback);
  }

  public traverseAfterOrder(): T[] {
    const result: T[] = [];
    this.traverseAfterOrderCallback((node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseAfterOrderCallback(callback: traverseCallback<T>): void {
    traverseAfterOrder(this.root, callback);
  }

  public traverseLevelOrder(): T[] {
    const result: T[] = [];
    traverseLevelOrder(this.root, (node) => {
      result.push(node.value);
    });
    return result;
  }

  public traverseLevelOrderCallback(callback: traverseCallback<T>): void {
    traverseLevelOrder(this.root, callback);
  }

  public contains(value: T): boolean {
    return Boolean(this.find(value));
  }

  public insert(value: T): BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.insert(value);
    redBlackTreeInsertBalance(node, this.setRoot);
    return node;
  }

  public remove(value: T): BinarySearchTreeNode<T> | null {
    const replaceNode = findReplaceNode<T>(
      this.root,
      value,
      this.comparator,
      false
    );

    if (!replaceNode) {
      return replaceNode;
    }

    if (!replaceNode.parent) {
      this.setRoot(null);
      return replaceNode;
    }

    if (replaceNode.color === color.black) {
      redBlackTreeRemoveBalance(() => this.root, replaceNode, this.setRoot);
    }

    removeChild(replaceNode.parent, replaceNode);
    return replaceNode;
  }

  public toString(): string {
    return this.traverseInOrder()
      .toString();
  }
}
