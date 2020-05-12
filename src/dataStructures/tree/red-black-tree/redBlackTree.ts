import {
  BinarySearchTree,
  BinarySearchTreeInterface,
  traverseCallback,
} from '../binarySearchTree';
import {
  Comparator,
  compareFunctionType,
} from '../../../utils/comparator';
import {
  CompleteRedBlackTreeNode,
  RedBlackTreeInterface,
  RedBlackTreeNodeInterface,
} from './types';
import { RedBlackTreeNode } from './redBlackTreeNode';
import {
  rotateLeftLeft,
  rotateLeftRight,
  rotateRightLeft,
  rotateRightRight,
} from '../utils';

function redBlackTreeCompare(a, b) {
  if (a.value === b.value) {
    return 0;
  }

  return a.value < b.value ? -1 : 1;
}

export class RedBlackTree<T = unknown> implements RedBlackTreeInterface<T> {
  get comparator(): Comparator {
    return this.binarySearchTree.comparator;
  }

  get root(): CompleteRedBlackTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  constructor(compareFunction?: compareFunctionType | Comparator) {
    this.binarySearchTree = new BinarySearchTree<RedBlackTreeNodeInterface<T>>(compareFunction || redBlackTreeCompare);
  }

  private balance(node: CompleteRedBlackTreeNode<T> | null): void {
    if (!node) {
      return;
    }

    if (node === this.root) {
      node.value.makeBlack();
      return;
    }

    if (node.parent.value.isBlack) {
      return;
    }

    if (node.uncle && node.uncle.value.isRed) {
      node.parent.value.makeBlack();
      node.uncle.value.makeBlack();
      node.parent.parent.value.makeRed();
      return this.balance(node.parent.parent);
    }

    if (node.parent === node.parent.parent.left) {
      if (node === node.parent.left) {
        node.parent.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateLeftLeft(node.parent.parent, this.root, this.setRoot.bind(this));
      } else {
        node.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateLeftRight(node.parent.parent, this.root, this.setRoot.bind(this));
      }
    } else {
      if (node === node.parent.right) {
        node.parent.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateRightRight(node.parent.parent, this.root, this.setRoot.bind(this));
      } else {
        node.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateRightLeft(node.parent.parent, this.root, this.setRoot.bind(this));
      }
    }
  }

  public readonly binarySearchTree: BinarySearchTreeInterface<RedBlackTreeNodeInterface<T>>;

  public setRoot(root: CompleteRedBlackTreeNode<T> | null): this {
    this.binarySearchTree.setRoot(root);
    return this;
  }

  public toString(): string {
    return this.traverseInOrder()
    .toString();
  }

  public find(value: T): null | CompleteRedBlackTreeNode<T> {
    return this.binarySearchTree.find(new RedBlackTreeNode(value));
  }

  public findMin(): null | CompleteRedBlackTreeNode<T> {
    return this.binarySearchTree.findMin();
  }

  public findMax(): null | CompleteRedBlackTreeNode<T> {
    return this.binarySearchTree.findMax();
  }

  public traversePreOrder(): T[] {
    const result = [];
    this.traversePreOrderCallback(node => {
      result.push(node.value.value);
    });
    return result;
  }

  public traversePreOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void {
    this.binarySearchTree.traversePreOrderCallback(callback);
  }

  public traverseInOrder(): T[] {
    const result = [];
    this.traverseInOrderCallback(node => {
      result.push(node.value.value);
    });
    return result;
  }

  public traverseInOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void {
    this.binarySearchTree.traverseInOrderCallback(callback);
  }

  public traverseAfterOrder(): T[] {
    const result = [];
    this.traverseAfterOrderCallback(node => {
      result.push(node.value.value);
    });
    return result;
  }

  public traverseAfterOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void {
    this.binarySearchTree.traverseAfterOrderCallback(callback);
  }

  public traverseLevelOrder(): T[] {
    const result = [];
    this.traverseLevelOrderCallback(node => {
      result.push(node.value.value);
    });
    return result;
  }

  public traverseLevelOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void {
    this.binarySearchTree.traverseLevelOrderCallback(callback);
  }

  public contains(value: T): boolean {
    return !!this.find(value);
  }

  public insert(value: T): CompleteRedBlackTreeNode<T> | null {
    const node = this.binarySearchTree.insert(new RedBlackTreeNode<T>(value));
    this.balance(node);
    return node;
  }

  public remove(value: T): CompleteRedBlackTreeNode<T> | null {
    const node = this.find(value);
    return node;
  }
}
