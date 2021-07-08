import { Comparator, compareFunctionType } from '../../../utils';
import { balance, BinarySearchTree, BinarySearchTreeNode, traverseCallback } from '../binarySearchTree';

export class AvlTree<T = unknown> {
  private readonly binarySearchTree: BinarySearchTree<T>;

  constructor(
    compareFunction?: compareFunctionType | Comparator,
    swap = function(
      tmpNode: BinarySearchTreeNode<T>,
      replaceNode: BinarySearchTreeNode<T>
    ): void {
      const tmpValue = tmpNode.value;
      tmpNode.value = replaceNode.value;
      replaceNode.value = tmpValue;
    }
  ) {
    this.binarySearchTree = new BinarySearchTree<T>(compareFunction, true, swap);
    this.setRoot = this.setRoot.bind(this);
  }

  public get comparator(): Comparator {
    return this.binarySearchTree.comparator;
  }

  public get root(): BinarySearchTreeNode<T> | null {
    return this.binarySearchTree.root;
  }

  public setRoot(root: BinarySearchTreeNode<T> | null): void {
    this.binarySearchTree.root = root;
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
      balance(currentNode, this.setRoot);
      currentNode = currentNode.parent;
    }

    return node;
  }

  public remove(value: T): BinarySearchTreeNode<T> | null {
    const node = this.binarySearchTree.remove(value);
    let removeNode = node;
    while (removeNode && removeNode.parent) {
      balance(removeNode.parent, this.setRoot);
      removeNode = removeNode.parent;
    }
    return node;
  }

  public toString(): string {
    return this.binarySearchTree.toString();
  }
}
