export type RedBlackTreeColor = 'red' | 'black';

export interface RedBlackTreeNodeInterface<T = unknown> {
  readonly value: T;
  readonly isRed: boolean;
  readonly isBlack: boolean;
  setValue(value: T): this;
  makeRed(): this;
  makeBlack(): this;
}
