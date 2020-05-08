import {
  BinarySearchTree,
  BinarySearchTreeInterface,
  BinarySearchTreeNodeInterface,
  traverseCallback,
} from '../binarySearchTree';
import {
  Comparator,
  compareFunctionType,
} from '../../../utils';
import { AvlTreeInterface } from './types';

export class AvlTree<T = unknown> implements AvlTreeInterface<T> {
  constructor(compareFunction?: compareFunctionType | Comparator) {
    this.binarySearchTree = new BinarySearchTree<T>(compareFunction);
  }

  public readonly binarySearchTree: BinarySearchTreeInterface<T>;

  get root(): BinarySearchTreeNodeInterface<T> | null {
    return this.binarySearchTree.root;
  }

  public toString(): string {
    return this.binarySearchTree.toString();
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
    let removeNode = this.binarySearchTree.remove(value);
    while (removeNode && removeNode.parent) {
      this.balance(removeNode.parent);
      removeNode = removeNode.parent;
    }
    return removeNode;
  }

  public balance(node: BinarySearchTreeNodeInterface<T>): this {
    if (node.balanceFactor > 1) {
      if (node.left.balanceFactor > 0) {
        this.rotateLeftLeft(node);
      } else if (node.left.balanceFactor < 0) {
        this.rotateLeftRight(node);
      }
    } else if (node.balanceFactor < -1) {
      if (node.right.balanceFactor < 0) {
        this.rotateRightRight(node);
      } else if (node.right.balanceFactor > 0) {
        this.rotateRightLeft(node);
      }
    }
    return this;
  }

  public rotateLeftLeft(rootNode: BinarySearchTreeNodeInterface<T>): this {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode);
    } else if (rootNode === this.binarySearchTree.root) {
      this.binarySearchTree.setRoot(leftNode);
    }

    if (leftNode.right) {
      rootNode.setLeft(leftNode.right);
    }

    leftNode.setRight(rootNode);
    return this;
  }

  public rotateLeftRight(rootNode: BinarySearchTreeNodeInterface<T>): this {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    const leftRightNode = leftNode.right;
    leftNode.setRight(null);

    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left);
      leftRightNode.setLeft(null);
    }

    rootNode.setLeft(leftRightNode);

    leftRightNode.setLeft(leftNode);

    return this.rotateLeftLeft(rootNode);
  }

  public rotateRightLeft(rootNode: BinarySearchTreeNodeInterface<T>): this {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    const rightLeftNode = rightNode.left;
    rightNode.setLeft(null);

    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right);
      rightLeftNode.setRight(null);
    }

    rootNode.setRight(rightLeftNode);

    rightLeftNode.setRight(rightNode);

    return this.rotateRightRight(rootNode);
  }

  public rotateRightRight(rootNode: BinarySearchTreeNodeInterface<T>): this {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode === this.binarySearchTree.root) {
      this.binarySearchTree.setRoot(rightNode);
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left);
    }

    rightNode.setLeft(rootNode);
    return this;
  }
}
