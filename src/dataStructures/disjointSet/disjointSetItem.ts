export class DisjointSetItem<T = unknown> {
  constructor(value: T, keyCallback?: (item: T) => string | number) {
    this.value = value;
    this.keyCallback = keyCallback;
    this.parent = null;
    this.children = new Map<string | number, DisjointSetItem<T>>();
  }

  private readonly keyCallback?: (item: T) => string | number;

  private parent: DisjointSetItem<T> | null;

  private readonly children: Map<string | number, DisjointSetItem<T>>;

  public readonly value: T;

  public getKey(): string | number {
    if (typeof this.keyCallback === 'function') {
      return this.keyCallback(this.value);
    } else {
      return this.value as unknown as string | number;
    }
  }

  public getRoot(): DisjointSetItem<T> {
    if (this.isRoot()) {
      return this;
    } else {
      return this.parent.getRoot();
    }
  }

  public isRoot(): boolean {
    return !this.parent;
  }

  public getRank(): number {
    const children = this.getChildren();
    let result = 0;
    for (let i = 0; i < children.length; i++) {
      result += children[i].getRank() + 1;
    }
    return result;
  }

  public getChildren(): Array<DisjointSetItem<T>> {
    const children: Array<DisjointSetItem<T>> = [];
    for (const child of this.children.values()) {
      children.push(child);
    }
    return children;
  }

  public addChild(childItem: DisjointSetItem<T>): DisjointSetItem<T> {
    this.children.set(childItem.getKey(), childItem);
    childItem.parent = this;

    return childItem;
  }
}
