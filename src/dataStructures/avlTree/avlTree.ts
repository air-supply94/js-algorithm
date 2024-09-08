import type { interfaces } from '../../types';
import {
  BinarySearchTree,
  getBalanceFactor,
  rotateLeftLeft,
  rotateLeftRight,
  rotateRightLeft,
  rotateRightRight,
} from '../binarySearchTree';

export class AvlTree<T = unknown> implements interfaces.AvlTree<T> {
  constructor(compare?: interfaces.CompareParams<T>) {
    this.binarySearchTree = new BinarySearchTree<T>(compare, true);
  }

  private readonly binarySearchTree: interfaces.BinarySearchTree<T>;

  private balance(root: interfaces.BinarySearchTreeNode<T>): void {
    if (getBalanceFactor(root) > 1) {
      if (getBalanceFactor(root.left) > 0) {
        rotateLeftLeft(root, this.binarySearchTree.setRoot);
      } else {
        rotateLeftRight(root);
        rotateLeftLeft(root, this.binarySearchTree.setRoot);
      }
    } else if (getBalanceFactor(root) < -1) {
      if (getBalanceFactor(root.right) < 0) {
        rotateRightRight(root, this.binarySearchTree.setRoot);
      } else {
        rotateRightLeft(root);
        rotateRightRight(root, this.binarySearchTree.setRoot);
      }
    }
  }

  public get root(): interfaces.BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  public get comparator(): interfaces.Comparator<T> {
    return this.binarySearchTree.comparator;
  }

  public get setRoot(): interfaces.BinarySearchTree<T>['setRoot'] {
    return this.binarySearchTree.setRoot;
  }

  public find(value: T): interfaces.BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.find(value);
  }

  public findMin(): interfaces.BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.findMin();
  }

  public findMax(): interfaces.BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.findMax();
  }

  public traversePreOrder(): T[] {
    return this.binarySearchTree.traversePreOrder();
  }

  public traversePreOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    this.binarySearchTree.traversePreOrderCallback(callback);
  }

  public traverseInOrder(): T[] {
    return this.binarySearchTree.traverseInOrder();
  }

  public traverseInOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    this.binarySearchTree.traverseInOrderCallback(callback);
  }

  public traverseAfterOrder(): T[] {
    return this.binarySearchTree.traverseAfterOrder();
  }

  public traverseAfterOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    this.binarySearchTree.traverseAfterOrderCallback(callback);
  }

  public traverseLevelOrder(): T[] {
    return this.binarySearchTree.traverseLevelOrder();
  }

  public traverseLevelOrderCallback(callback: interfaces.BinarySearchTreeTraverseCallback<T>): void {
    this.binarySearchTree.traverseLevelOrderCallback(callback);
  }

  public contains(value: T): boolean {
    return this.binarySearchTree.contains(value);
  }

  public insert(value: T): interfaces.BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.insert(value);
    let currentNode = node;
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }

    return node;
  }

  public remove(value: T): interfaces.BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.remove(value);
    let removeNode = node;
    while (removeNode) {
      this.balance(removeNode.parent);
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
