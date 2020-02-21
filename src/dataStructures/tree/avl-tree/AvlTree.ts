import { BinarySearchTree } from '../binary-search-tree/BinarySearchTree';
import { BinarySearchTreeNode } from '../binary-search-tree/BinarySearchTreeNode';

export class AvlTree<T> {
  constructor() {
    this._binarySearchTree = new BinarySearchTree<T>();
  }

  private _binarySearchTree: BinarySearchTree<T>;

  get root(): BinarySearchTreeNode<T> {
    return this._binarySearchTree.root;
  }

  public toString(): string {
    return this._binarySearchTree.toString();
  }

  public contains(value?: any): boolean {
    return this._binarySearchTree.contains(value);
  }

  public insert(value: T): boolean {
    const node = this._binarySearchTree.insert(value);

    let currentNode: BinarySearchTreeNode<T> = this.root.find(value);
    while (currentNode) {
      this.balance(currentNode);
      currentNode = currentNode.parent;
    }

    return !!node;
  }

  public remove(value?: any): boolean {
    if (this._binarySearchTree.remove(value)) {
      this.balance(this.root);
      return true;
    }

    return false;
  }

  public balance(node: BinarySearchTreeNode<T>): this {
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

  public rotateLeftLeft(rootNode: BinarySearchTreeNode<T>): this {
    const leftNode = rootNode.left;
    rootNode.setLeft(null);

    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode);
    } else if (rootNode === this.root) {
      this._binarySearchTree.root = leftNode;
    }

    if (leftNode.right) {
      rootNode.setLeft(leftNode.right);
    }

    leftNode.setRight(rootNode);
    return this;
  }

  public rotateLeftRight(rootNode: BinarySearchTreeNode<T>): this {
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

  public rotateRightLeft(rootNode: BinarySearchTreeNode<T>): this {
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

  public rotateRightRight(rootNode: BinarySearchTreeNode<T>): this {
    const rightNode = rootNode.right;
    rootNode.setRight(null);

    if (rootNode.parent) {
      rootNode.parent.setRight(rightNode);
    } else if (rootNode === this.root) {
      this._binarySearchTree.root = rightNode;
    }

    if (rightNode.left) {
      rootNode.setRight(rightNode.left);
    }

    rightNode.setLeft(rootNode);
    return this;
  }
}
