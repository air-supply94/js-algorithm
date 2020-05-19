import { DisjointSetItemInterface } from './types';

function identity(item: string): string {
  return item;
}

export class DisjointSetItem<T = unknown> implements DisjointSetItemInterface<T> {
  constructor(value: T, keyCallback?: (item: T) => string) {
    this.value = value;
    this.keyCallback = keyCallback || identity;
    this._parent = null;
    this.children = {};
  }

  private _parent: DisjointSetItemInterface<T> | null;
  get parent(): DisjointSetItemInterface<T> | null {
    return this._parent;
  }

  public readonly value: T;
  public readonly keyCallback: (item: string | T) => string;

  public readonly children: { [key: string]: DisjointSetItemInterface<T> };

  public getKey(): string {
    return this.keyCallback(this.value);
  }

  public getRoot(): DisjointSetItemInterface<T> {
    return this.isRoot() ? this : this.parent.getRoot();
  }

  public isRoot(): boolean {
    return !this.parent;
  }

  public getRank(): number {
    return this.getChildren()
    .reduce((prev: number, child: DisjointSetItemInterface<T>) => prev + child.getRank() + 1, 0);
  }

  public getChildren(): DisjointSetItemInterface<T>[] {
    return Object.values(this.children);
  }

  public setParent(parentItem: DisjointSetItemInterface<T> | null): DisjointSetItemInterface<T> {
    this._parent = parentItem;
    return this;
  }

  public addChild(childItem: DisjointSetItemInterface<T>): DisjointSetItemInterface<T> {
    this.children[childItem.getKey()] = childItem;
    childItem.setParent(this);

    return childItem;
  }
}
