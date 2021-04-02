import { Comparator, compareFunctionType } from '../../../utils';
import { BinarySearchTree, findReplaceNode, getUncle, rotateLeftLeft, rotateLeftRight, rotateRightLeft, rotateRightRight } from '../binarySearchTree';
import { BinarySearchTreeInterface, traverseCallback } from '../binarySearchTree/types';
import { RedBlackTreeNode } from './redBlackTreeNode';
import { CompleteRedBlackTreeNode, RedBlackTreeInterface, RedBlackTreeNodeInterface } from './types';

function redBlackTreeCompare(a, b) {
  if (a.value === b.value) {
    return 0;
  }

  return a.value < b.value ? -1 : 1;
}

export class RedBlackTree<T = unknown> implements RedBlackTreeInterface<T> {
  public get comparator(): Comparator {
    return this.binarySearchTree.comparator;
  }

  public get root(): CompleteRedBlackTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  constructor(
    compareFunction?: compareFunctionType | Comparator,
    swap = function(
      tmpNode: CompleteRedBlackTreeNode<T>,
      replaceNode: CompleteRedBlackTreeNode<T>
    ): void {
      const tmpValue = tmpNode.value.value;
      tmpNode.value.setValue(replaceNode.value.value);
      replaceNode.value.setValue(tmpValue);
    }
  ) {
    this.binarySearchTree = new BinarySearchTree<RedBlackTreeNodeInterface<T>>(
      compareFunction || redBlackTreeCompare
    );
    this.swap = swap;
    this.setRoot = this.setRoot.bind(this);
  }

  private readonly swap: (
    tmpNode: CompleteRedBlackTreeNode<T>,
    replaceNode: CompleteRedBlackTreeNode<T>,
  ) => void;

  private insertBalance(node: CompleteRedBlackTreeNode<T> | null): void {
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

    if (getUncle(node) && getUncle(node).value.isRed) {
      node.parent.value.makeBlack();
      getUncle(node)
        .value
        .makeBlack();
      node.parent.parent.value.makeRed();
      return this.insertBalance(node.parent.parent);
    }

    if (node.parent === node.parent.parent.left) {
      if (node === node.parent.left) {
        node.parent.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateLeftLeft<RedBlackTreeNodeInterface<T>>(node.parent.parent, this.setRoot);
      } else {
        node.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateLeftRight<RedBlackTreeNodeInterface<T>>(node.parent.parent);
        rotateLeftLeft<RedBlackTreeNodeInterface<T>>(node.parent, this.setRoot);
      }
    } else {
      if (node === node.parent.right) {
        node.parent.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateRightRight<RedBlackTreeNodeInterface<T>>(node.parent.parent, this.setRoot);
      } else {
        node.value.makeBlack();
        node.parent.parent.value.makeRed();
        rotateRightLeft<RedBlackTreeNodeInterface<T>>(node.parent.parent);
        rotateRightRight<RedBlackTreeNodeInterface<T>>(node.parent, this.setRoot);
      }
    }
  }

  private removeBalance(node: CompleteRedBlackTreeNode<T>): void {
    let currentNode = node;
    while (currentNode.parent && currentNode.value.isBlack) {
      if (currentNode === currentNode.parent.left) {
        const sibling = currentNode.parent.right;

        if (sibling.value.isRed) {
          currentNode.parent.value.makeRed();
          sibling.value.makeBlack();
          rotateRightRight<RedBlackTreeNodeInterface<T>>(currentNode.parent, this.setRoot);
        } else if (!sibling.left && !sibling.right) {
          sibling.value.makeRed();
          currentNode = currentNode.parent;
        } else if (sibling.left && sibling.right && sibling.left.value.isBlack && sibling.right.value.isBlack) {
          sibling.value.makeRed();
          currentNode = currentNode.parent;
        } else if (sibling.right && sibling.right.value.isRed) {
          sibling.value.setColor(currentNode.parent.value.color);
          currentNode.parent.value.makeBlack();
          sibling.right.value.makeBlack();
          rotateRightRight<RedBlackTreeNodeInterface<T>>(currentNode.parent, this.setRoot);
          currentNode = this.root;
        } else {
          sibling.left.value.makeBlack();
          sibling.value.makeRed();
          rotateRightLeft<RedBlackTreeNodeInterface<T>>(currentNode.parent);
        }
      } else {
        const sibling = currentNode.parent.left;

        if (sibling.value.isRed) {
          currentNode.parent.value.makeRed();
          sibling.value.makeBlack();
          rotateLeftLeft<RedBlackTreeNodeInterface<T>>(currentNode.parent, this.setRoot);
        } else if (!sibling.left && !sibling.right) {
          sibling.value.makeRed();
          currentNode = currentNode.parent;
        } else if (sibling.left && sibling.right && sibling.left.value.isBlack && sibling.right.value.isBlack) {
          sibling.value.makeRed();
          currentNode = currentNode.parent;
        } else if (sibling.left && sibling.left.value.isRed) {
          sibling.value.setColor(currentNode.parent.value.color);
          currentNode.parent.value.makeBlack();
          sibling.left.value.makeBlack();
          rotateLeftLeft<RedBlackTreeNodeInterface<T>>(currentNode.parent, this.setRoot);
          currentNode = this.root;
        } else {
          sibling.right.value.makeBlack();
          sibling.value.makeRed();
          rotateLeftRight<RedBlackTreeNodeInterface<T>>(currentNode.parent);
        }
      }
    }
    currentNode.value.makeBlack();
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
    this.traversePreOrderCallback((node) => {
      result.push(node.value.value);
    });
    return result;
  }

  public traversePreOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void {
    this.binarySearchTree.traversePreOrderCallback(callback);
  }

  public traverseInOrder(): T[] {
    const result = [];
    this.traverseInOrderCallback((node) => {
      result.push(node.value.value);
    });
    return result;
  }

  public traverseInOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void {
    this.binarySearchTree.traverseInOrderCallback(callback);
  }

  public traverseAfterOrder(): T[] {
    const result = [];
    this.traverseAfterOrderCallback((node) => {
      result.push(node.value.value);
    });
    return result;
  }

  public traverseAfterOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void {
    this.binarySearchTree.traverseAfterOrderCallback(callback);
  }

  public traverseLevelOrder(): T[] {
    const result = [];
    this.traverseLevelOrderCallback((node) => {
      result.push(node.value.value);
    });
    return result;
  }

  public traverseLevelOrderCallback(callback: traverseCallback<RedBlackTreeNodeInterface<T>>): void {
    this.binarySearchTree.traverseLevelOrderCallback(callback);
  }

  public contains(value: T): boolean {
    return Boolean(this.find(value));
  }

  public insert(value: T): CompleteRedBlackTreeNode<T> | null {
    const node = this.binarySearchTree.insert(new RedBlackTreeNode<T>(value));
    this.insertBalance(node);
    return node;
  }

  public remove(value: T): CompleteRedBlackTreeNode<T> | null {
    const replaceNode = findReplaceNode<RedBlackTreeNodeInterface<T>>(
      this.root,
      new RedBlackTreeNode<T>(value),
      this.comparator,
      false,
      this.swap
    );

    if (!replaceNode) {
      return replaceNode;
    }

    if (!replaceNode.parent) {
      this.setRoot(null);
      return replaceNode;
    }

    if (replaceNode.value.isBlack) {
      this.removeBalance(replaceNode);
    }

    replaceNode.parent.removeChild(replaceNode);
    return replaceNode;
  }
}
