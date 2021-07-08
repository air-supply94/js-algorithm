import { Comparator, compareFunctionType } from '../../../utils';
import { BinarySearchTree, BinarySearchTreeNode, getBalanceFactor, rotateLeftLeft, rotateLeftRight, rotateRightLeft, rotateRightRight, traverseCallback } from '../binarySearchTree';

export class AvlTree<T = unknown> {
  public get comparator(): Comparator {
    return this.binarySearchTree.comparator;
  }

  public get root(): BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  constructor(
    compareFunction?: compareFunctionType | Comparator,
    swap = function(
      tmpNode: BinarySearchTreeNode<T>,
      replaceNode: BinarySearchTreeNode<T>
    ): void {
      const tmpValue = tmpNode.value;
      tmpNode.setValue(replaceNode.value);
      replaceNode.setValue(tmpValue);
    }
  ) {
    this.binarySearchTree = new BinarySearchTree<T>(compareFunction, true, swap);
    this.setRoot = this.setRoot.bind(this);
  }

  public readonly binarySearchTree: BinarySearchTree<T>;

  public setRoot(root: BinarySearchTreeNode<T> | null): this {
    this.binarySearchTree.setRoot(root);
    return this;
  }

  public toString(): string {
    return this.binarySearchTree.toString();
  }

  public balance(node: BinarySearchTreeNode<T>): this {
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
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }

    return node;
  }

  public remove(value: T): BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.remove(value);
    let removeNode = node;
    while (removeNode && removeNode.parent) {
      this.balance(removeNode.parent);
      removeNode = removeNode.parent;
    }
    return node;
  }
}
