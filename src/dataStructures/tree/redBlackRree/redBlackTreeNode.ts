import {
  RedBlackTreeColor,
  RedBlackTreeNodeInterface,
} from './types';

export const RED_BLACK_TREE_COLORS = {
  red: 'red',
  black: 'black',
};

export class RedBlackTreeNode<T = unknown> implements RedBlackTreeNodeInterface<T> {
  constructor(value: T) {
    this._value = value;
    this._color = RED_BLACK_TREE_COLORS.red as RedBlackTreeColor;
  }

  private _color: RedBlackTreeColor;
  private _value: T;

  get color(): RedBlackTreeColor {
    return this._color;
  }

  public setColor(color: RedBlackTreeColor): this {
    this._color = color;
    return this;
  }

  get value(): T {
    return this._value;
  }

  public setValue(value: T): this {
    this._value = value;
    return this;
  }

  get isRed(): boolean {
    return this.color === RED_BLACK_TREE_COLORS.red;
  }

  get isBlack(): boolean {
    return this.color === RED_BLACK_TREE_COLORS.black;
  }

  public makeRed(): this {
    this.setColor(RED_BLACK_TREE_COLORS.red as RedBlackTreeColor);
    return this;
  }

  public makeBlack(): this {
    this.setColor(RED_BLACK_TREE_COLORS.black as RedBlackTreeColor);
    return this;
  }

  public toString() {
    return String(this.value);
  }
}
