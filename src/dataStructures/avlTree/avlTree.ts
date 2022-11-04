import type { Comparator, Compare } from '../../utils';
import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';
import { BinarySearchTree, getBalanceFactor, rotateLeftLeft, rotateLeftRight, rotateRightLeft, rotateRightRight } from '../binarySearchTree';

export class AvlTree<T = unknown> {
  constructor(compare?: Compare<T>) {
    this.binarySearchTree = new BinarySearchTree<T>(compare, true);
  }

  private readonly binarySearchTree: BinarySearchTree<T>;

  private readonly setRoot = (root: BinarySearchTreeNode<T> | null): void => {
    this.binarySearchTree.root = root;
  };

  private avlTreeBalance(root: BinarySearchTreeNode<T>): void {
    if (getBalanceFactor(root) > 1) {
      if (getBalanceFactor(root.left) > 0) {
        rotateLeftLeft(root, this.setRoot);
      } else {
        rotateLeftRight(root);
        rotateLeftLeft(root, this.setRoot);
      }
    } else if (getBalanceFactor(root) < -1) {
      if (getBalanceFactor(root.right) < 0) {
        rotateRightRight(root, this.setRoot);
      } else {
        rotateRightLeft(root);
        rotateRightRight(root, this.setRoot);
      }
    }
  }

  public get comparator(): Comparator<T> {
    return this.binarySearchTree.comparator;
  }

  public get root(): BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  public find(value: T): BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.find(value);
  }

  public findMin(): BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.findMin();
  }

  public findMax(): BinarySearchTreeNode<T> | null {
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
      this.avlTreeBalance(currentNode);
      currentNode = currentNode.parent;
    }

    return node;
  }

  public remove(value: T): BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.remove(value);
    let removeNode = node;
    while (removeNode) {
      this.avlTreeBalance(removeNode.parent);
      removeNode = removeNode.parent;
    }

    if (node) {
      node.parent = null;
    }
    return node;
  }

  public toString(): string {
    return this.binarySearchTree.toString();
  }
}
