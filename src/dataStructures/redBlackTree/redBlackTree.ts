import type { Comparator, Compare } from '../../utils';
import type { BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';
import { BinarySearchTree, COLOR_TYPE, findReplaceNode, removeChild, traverseAfterOrder, traverseInOrder, traverseLevelOrder, traversePreOrder, getUncle, rotateLeftLeft, rotateLeftRight, rotateRightRight, rotateRightLeft } from '../binarySearchTree';

function redBlackTreeInsertBalance<T = unknown>(node: BinarySearchTreeNode<T> | null, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  if (node == null) {
    return;
  }

  if (node.parent == null) {
    node.color = COLOR_TYPE.black;
    return;
  }

  if (node.parent.color === COLOR_TYPE.black) {
    return;
  }

  const uncle = getUncle(node);
  if (uncle && uncle.color === COLOR_TYPE.red) {
    node.parent.color = COLOR_TYPE.black;
    uncle.color = COLOR_TYPE.black;
    node.parent.parent.color = COLOR_TYPE.red;
    return redBlackTreeInsertBalance(node.parent.parent, setRoot);
  }

  if (node.parent === node.parent.parent.left) {
    if (node === node.parent.left) {
      node.parent.color = COLOR_TYPE.black;
      node.parent.parent.color = COLOR_TYPE.red;
      rotateLeftLeft(node.parent.parent, setRoot);
    } else {
      node.color = COLOR_TYPE.black;
      node.parent.parent.color = COLOR_TYPE.red;
      rotateLeftRight(node.parent.parent);
      rotateLeftLeft(node.parent, setRoot);
    }
  } else {
    if (node === node.parent.right) {
      node.parent.color = COLOR_TYPE.black;
      node.parent.parent.color = COLOR_TYPE.red;
      rotateRightRight(node.parent.parent, setRoot);
    } else {
      node.color = COLOR_TYPE.black;
      node.parent.parent.color = COLOR_TYPE.red;
      rotateRightLeft(node.parent.parent);
      rotateRightRight(node.parent, setRoot);
    }
  }
}

function redBlackTreeRemoveBalance<T = unknown>(getRoot: () => BinarySearchTreeNode<T>, node: BinarySearchTreeNode<T>, setRoot: (root: BinarySearchTreeNode<T> | null) => void): void {
  let currentNode = node;
  while (currentNode.parent && currentNode.color === COLOR_TYPE.black) {
    if (currentNode === currentNode.parent.left) {
      const sibling = currentNode.parent.right;

      if (sibling.color === COLOR_TYPE.red) {
        currentNode.parent.color = COLOR_TYPE.red;
        sibling.color = COLOR_TYPE.black;
        rotateRightRight(currentNode.parent, setRoot);
      } else if ((sibling.left == null && sibling.right == null) || (sibling.left && sibling.right && sibling.left.color === COLOR_TYPE.black && sibling.right.color === COLOR_TYPE.black)) {
        sibling.color = COLOR_TYPE.red;
        currentNode = currentNode.parent;
      } else if (sibling.right && sibling.right.color === COLOR_TYPE.red) {
        sibling.color = currentNode.parent.color;
        currentNode.parent.color = COLOR_TYPE.black;
        sibling.right.color = COLOR_TYPE.black;
        rotateRightRight(currentNode.parent, setRoot);
        currentNode = getRoot();
      } else if (sibling.left && sibling.left.color === COLOR_TYPE.red) {
        sibling.left.color = COLOR_TYPE.black;
        sibling.color = COLOR_TYPE.red;
        rotateRightLeft(currentNode.parent);
      }
    } else {
      const sibling = currentNode.parent.left;

      if (sibling.color === COLOR_TYPE.red) {
        currentNode.parent.color = COLOR_TYPE.red;
        sibling.color = COLOR_TYPE.black;
        rotateLeftLeft(currentNode.parent, setRoot);
      } else if ((sibling.left == null && sibling.right == null) || (sibling.left && sibling.right && sibling.left.color === COLOR_TYPE.black && sibling.right.color === COLOR_TYPE.black)) {
        sibling.color = COLOR_TYPE.red;
        currentNode = currentNode.parent;
      } else if (sibling.left && sibling.left.color === COLOR_TYPE.red) {
        sibling.color = currentNode.parent.color;
        currentNode.parent.color = COLOR_TYPE.black;
        sibling.left.color = COLOR_TYPE.black;
        rotateLeftLeft(currentNode.parent, setRoot);
        currentNode = getRoot();
      } else if (sibling.right && sibling.right.color === COLOR_TYPE.red) {
        sibling.right.color = COLOR_TYPE.black;
        sibling.color = COLOR_TYPE.red;
        rotateLeftRight(currentNode.parent);
      }
    }
  }
  currentNode.color = COLOR_TYPE.black;
}

export class RedBlackTree<T = unknown> {
  constructor(compare?: Compare<T>) {
    this.binarySearchTree = new BinarySearchTree<T>(compare, false);
    this.setRoot = this.setRoot.bind(this);
  }

  private readonly binarySearchTree: BinarySearchTree<T>;

  public get comparator(): Comparator<T> {
    return this.binarySearchTree.comparator;
  }

  public get root(): BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  public setRoot(root: BinarySearchTreeNode<T> | null): void {
    this.binarySearchTree.root = root;
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
    return this.binarySearchTree.contains(value);
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

    if (replaceNode == null) {
      return replaceNode;
    }

    if (replaceNode.parent == null) {
      this.setRoot(null);
      return replaceNode;
    }

    if (replaceNode.color === COLOR_TYPE.black) {
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
