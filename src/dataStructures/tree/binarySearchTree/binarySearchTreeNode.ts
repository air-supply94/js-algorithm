import { traverseInOrder } from './utils';
import { BinarySearchTreeNodeInterface } from './types';

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

  get value(): T {
    return this._value;
  }

  get left(): null | BinarySearchTreeNodeInterface<T> {
    return this._left;
  }

  get right(): null | BinarySearchTreeNodeInterface<T> {
    return this._right;
  }

  get parent(): null | BinarySearchTreeNodeInterface<T> {
    return this._parent;
  }

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

  get uncle(): null | BinarySearchTreeNodeInterface<T> {
    if (!this.parent) {
      return null;
    }

    if (!this.parent.parent) {
      return null;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return null;
    }

    if (this.parent === this.parent.parent.left) {
      return this.parent.parent.right;
    }

    return this.parent.parent.left;
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
    if (this.left && nodeToRemove === this.left) {
      this.setLeft(null);
      return true;
    }

    if (this.right && nodeToRemove === this.right) {
      this.setRight(null);
      return true;
    }

    return false;
  }

  public replaceChild(
    nodeToReplace: BinarySearchTreeNodeInterface<T>,
    replacementNode: BinarySearchTreeNodeInterface<T>,
  ): boolean {
    if (!nodeToReplace || !replacementNode) {
      return false;
    }

    if (this.left && this.left === nodeToReplace) {
      this.setLeft(replacementNode);
      return true;
    }

    if (this.right && this.right === nodeToReplace) {
      this.setRight(replacementNode);
      return true;
    }

    return false;
  }

  public toString(): string {
    const result = [];
    traverseInOrder(this, function (node) {
      result.push(node.value);
    });

    return result.toString();
  }
}
