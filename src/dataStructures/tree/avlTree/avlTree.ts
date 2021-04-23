import { Comparator, compareFunctionType } from '../../../utils';
import { BinarySearchTree, getBalanceFactor, rotateLeftLeft, rotateLeftRight, rotateRightLeft, rotateRightRight } from '../binarySearchTree';
import { BinarySearchTreeInterface, BinarySearchTreeNodeInterface, traverseCallback } from '../binarySearchTree/types';
import { AvlTreeInterface } from './types';

export class AvlTree<T = unknown> implements AvlTreeInterface<T> {
  public get comparator(): Comparator {
    return this.binarySearchTree.comparator;
  }

  public get root(): BinarySearchTreeNodeInterface<T> | null {
    return this.binarySearchTree.root;
  }

  constructor(
    compareFunction?: compareFunctionType | Comparator,
    swap = function(
      tmpNode: BinarySearchTreeNodeInterface<T>,
      replaceNode: BinarySearchTreeNodeInterface<T>
    ): void {
      const tmpValue = tmpNode.value;
      tmpNode.setValue(replaceNode.value);
      replaceNode.setValue(tmpValue);
    }
  ) {
    this.binarySearchTree = new BinarySearchTree<T>(compareFunction, true, swap);
    this.setRoot = this.setRoot.bind(this);
  }

  private readonly binarySearchTree: BinarySearchTreeInterface<T>;

  public setRoot(root: BinarySearchTreeNodeInterface<T> | null): this {
    this.binarySearchTree.setRoot(root);
    return this;
  }

  public toString(): string {
    return this.binarySearchTree.toString();
  }

  public balance(node: BinarySearchTreeNodeInterface<T>): this {
    if (getBalanceFactor<T>(node) > 1) {
      if (getBalanceFactor<T>(node.left) > 0) {
        rotateLeftLeft<T>(node, this.setRoot);
      } else if (getBalanceFactor<T>(node.left) < 0) {
        rotateLeftRight<T>(node);
        rotateLeftLeft<T>(node, this.setRoot);
      }
    } else if (getBalanceFactor<T>(node) < -1) {
      if (getBalanceFactor<T>(node.right) < 0) {
        rotateRightRight<T>(node, this.setRoot);
      } else if (getBalanceFactor<T>(node.right) > 0) {
        rotateRightLeft<T>(node);
        rotateRightRight<T>(node, this.setRoot);
      }
    }
    return this;
  }

  public find(value: T): null | BinarySearchTreeNodeInterface<T> {
    return this.binarySearchTree.find(value);
  }

  public findMin(): null | BinarySearchTreeNodeInterface<T> {
    return this.binarySearchTree.findMin();
  }

  public findMax(): null | BinarySearchTreeNodeInterface<T> {
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

  public insert(value: T): BinarySearchTreeNodeInterface<T> | null {
    const node = this.binarySearchTree.insert(value);
    let currentNode = node;
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }

    return node;
  }

  public remove(value: T): BinarySearchTreeNodeInterface<T> | null {
    const node = this.binarySearchTree.remove(value);
    let removeNode = node;
    while (removeNode && removeNode.parent) {
      this.balance(removeNode.parent);
      removeNode = removeNode.parent;
    }
    return node;
  }
}
