import { Comparator } from '../../utils/comparator';
import { HashTable } from '../hashTable';
import { InterfaceBinaryTreeNode } from './@types';
import { Stack } from '../stack';
import { Queue } from '../queue';

export class BinaryTreeNode<T> implements InterfaceBinaryTreeNode<T> {

  get leftHeight(): number {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get rightHeight(): number {
    if (!this.right) {
      return 0;
    }

    return this.right.height + 1;
  }

  get height(): number {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor(): number {
    return this.leftHeight - this.rightHeight;
  }

  get uncle(): null | InterfaceBinaryTreeNode<T> {
    if (!this.parent) {
      return null;
    }

    if (!this.parent.parent) {
      return null;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return null;
    }

    if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
      return this.parent.parent.right;
    }

    return this.parent.parent.left;
  }

  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = value;

    this.meta = new HashTable();

    this.nodeComparator = new Comparator();
  }

  public static copyNode<T>(sourceNode: InterfaceBinaryTreeNode<T>, targetNode: InterfaceBinaryTreeNode<T>): void {
    targetNode.setValue(sourceNode.value)
    .setLeft(sourceNode.left)
    .setRight(sourceNode.right);
  }

  public left: null | InterfaceBinaryTreeNode<T>;
  public right: null | InterfaceBinaryTreeNode<T>;
  public parent: null | InterfaceBinaryTreeNode<T>;
  public value: T;
  public meta: HashTable<T>;
  public nodeComparator: Comparator;

  public setValue(value: T): this {
    this.value = value;
    return this;
  }

  public setLeft(node: InterfaceBinaryTreeNode<T>): this {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  public setRight(node: InterfaceBinaryTreeNode<T>): this {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }

    return this;

  }

  public removeChild(nodeToRemove: InterfaceBinaryTreeNode<T>): boolean {
    if (!nodeToRemove) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(nodeToRemove, this.left)) {
      this.left = null;
      return true;
    }

    if (this.right && this.nodeComparator.equal(nodeToRemove, this.right)) {
      this.right = null;
      return true;
    }

    return false;
  }

  public replaceChild(nodeToReplace: InterfaceBinaryTreeNode<T>, replacementNode: InterfaceBinaryTreeNode<T>): boolean {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.nodeComparator.equal(this.left, nodeToReplace)) {
      this.left = replacementNode;
      return true;
    }

    if (this.right && this.nodeComparator.equal(this.right, nodeToReplace)) {
      this.right = replacementNode;
      return true;
    }

    return false;
  }

  public traverseInOrder(): T[] {
    const result = [];
    const nodeStack = new Stack<InterfaceBinaryTreeNode<T>>();
    let currentNode: InterfaceBinaryTreeNode<T> = this;
    while (true) {
      while (currentNode) {
        nodeStack.push(currentNode);
        currentNode = currentNode.left;
      }

      if (nodeStack.isEmpty()) {
        break;
      }

      currentNode = nodeStack.pop();
      result.push(currentNode.value);
      currentNode = currentNode.right;
    }
    return result;
  }

  public traversePreOrder(): T[] {
    const result = [];
    const nodeStack = new Stack<InterfaceBinaryTreeNode<T>>();
    let currentNode: InterfaceBinaryTreeNode<T> = this;
    while (true) {
      while (currentNode) {
        result.push(currentNode.value);
        if (currentNode.right) {
          nodeStack.push(currentNode.right);
        }
        currentNode = currentNode.left;
      }

      if (nodeStack.isEmpty()) {
        break;
      }

      currentNode = nodeStack.pop();
    }
    return result;
  }

  public traverseAfterOrder(): T[] {
    let result = [];

    if (this.left) {
      result = result.concat(this.left.traverseAfterOrder());
    }

    if (this.right) {
      result = result.concat(this.right.traverseAfterOrder());
    }

    result.push(this.value);

    return result;
  }

  public traverseLevelOrder(): T[] {
    const result = [];
    const nodeQueue = new Queue<InterfaceBinaryTreeNode<T>>();
    nodeQueue.enqueue(this);
    while (!nodeQueue.isEmpty()) {
      const currentNode = nodeQueue.dequeue();
      result.push(currentNode.value);

      if (currentNode.left) {
        nodeQueue.enqueue(currentNode.left);
      }

      if (currentNode.right) {
        nodeQueue.enqueue(currentNode.right);
      }
    }

    return result;
  }

  public toString(): string {
    return this.traverseInOrder()
    .toString();
  }
}
