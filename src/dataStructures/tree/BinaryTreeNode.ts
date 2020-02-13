import { Comparator } from '../../utils/comparator';
import { HashTable } from '../hashTable';
import { Stack } from '../stack';
import { Queue } from '../queue';

export class BinaryTreeNode<T> {

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

  get uncle(): null | this {
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

  public static copyNode<T>(sourceNode: BinaryTreeNode<T>, targetNode: BinaryTreeNode<T>): void {
    targetNode.setValue(sourceNode.value)
    .setLeft(sourceNode.left)
    .setRight(sourceNode.right);
  }

  public left: null | this;
  public right: null | this;
  public parent: null | this;
  public value: T;
  public meta: HashTable<T>;
  public nodeComparator: Comparator;

  public setValue(value: T): this {
    this.value = value;
    return this;
  }

  public setLeft(node: this): this {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  public setRight(node: this): this {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;

    if (this.right) {
      this.right.parent = this;
    }

    return this;

  }

  public removeChild(nodeToRemove: this): boolean {
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

  public replaceChild(nodeToReplace: this, replacementNode: this): boolean {
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
    const nodeStack = new Stack<BinaryTreeNode<T>>();
    let currentNode: BinaryTreeNode<T> = this;
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
    const nodeStack = new Stack<BinaryTreeNode<T>>();
    let currentNode: BinaryTreeNode<T> = this;
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
    const result = [];
    const nodeStack = new Stack<BinaryTreeNode<T>>();
    let currentNode: BinaryTreeNode<T> = this;
    nodeStack.push(currentNode);

    while (!nodeStack.isEmpty()) {
      if (nodeStack.peek() !== currentNode.parent) {
        // tslint:disable-next-line:no-conditional-assignment
        while (currentNode = nodeStack.peek()) {
          if (currentNode.left) {
            if (currentNode.right) {
              nodeStack.push(currentNode.right);
            }
            nodeStack.push(currentNode.left);
          } else {
            nodeStack.push(currentNode.right);
          }
        }
        nodeStack.pop();
      }
      currentNode = nodeStack.pop();
      result.push(currentNode.value);
    }
    return result;
  }

  public traverseLevelOrder(): T[] {
    const result = [];
    const nodeQueue = new Queue<BinaryTreeNode<T>>();
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
