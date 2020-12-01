import { BinarySearchTreeNodeInterface } from './types';
import { traverseInOrder } from './utils';

export class BinarySearchTreeNode<T = unknown> implements BinarySearchTreeNodeInterface<T> {
  constructor(value = null) {
    this._left = null;
    this._right = null;
    this._parent = null;
    this._value = value;
  }

  private _left: null | BinarySearchTreeNodeInterface<T>;

  private _right: null | BinarySearchTreeNodeInterface<T>;

  private _parent: null | BinarySearchTreeNodeInterface<T>;

  private _value: T;

  public get value(): T {
    return this._value;
  }

  public get left(): null | BinarySearchTreeNodeInterface<T> {
    return this._left;
  }

  public get right(): null | BinarySearchTreeNodeInterface<T> {
    return this._right;
  }

  public get parent(): null | BinarySearchTreeNodeInterface<T> {
    return this._parent;
  }

  public setValue(value: T): this {
    this._value = value;
    return this;
  }

  public setParent(parent: null | BinarySearchTreeNodeInterface<T>): this {
    this._parent = parent;
    return this;
  }

  public setLeft(node: BinarySearchTreeNodeInterface<T> | null): this {
    if (this.left) {
      this.left.setParent(null);
    }

    this._left = node;

    if (this.left) {
      this.left.setParent(this);
    }

    return this;
  }

  public setRight(node: BinarySearchTreeNodeInterface<T> | null): this {
    if (this.right) {
      this.right.setParent(null);
    }

    this._right = node;

    if (this.right) {
      this.right.setParent(this);
    }

    return this;
  }

  public removeChild(nodeToRemove: BinarySearchTreeNodeInterface<T>): boolean {
    if (!nodeToRemove) {
      return false;
    }

    if (nodeToRemove === this.left) {
      this.setLeft(null);
      return true;
    } else if (nodeToRemove === this.right) {
      this.setRight(null);
      return true;
    } else {
      return false;
    }
  }

  public replaceChild(
    nodeToReplace: BinarySearchTreeNodeInterface<T>,
    replacementNode: BinarySearchTreeNodeInterface<T>
  ): boolean {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left === nodeToReplace) {
      this.setLeft(replacementNode);
      return true;
    } else if (this.right === nodeToReplace) {
      this.setRight(replacementNode);
      return true;
    } else {
      return false;
    }
  }

  public toString(): string {
    const result = [];
    traverseInOrder(this, (node) => {
      result.push(node.value);
    });

    return result.toString();
  }
}
