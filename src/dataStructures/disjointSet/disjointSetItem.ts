export class DisjointSetItem<T = unknown> {
  constructor(value: T, keyCallback?: (item: T) => string) {
    this.value = value;
    this.keyCallback = keyCallback;
    this.parent = null;
    this.children = Object.create(null);
  }

  private readonly keyCallback?: (item: T) => string;

  private parent: DisjointSetItem<T> | null;

  private readonly children: {[key: string]: DisjointSetItem<T>; };

  public readonly value: T;

  public getKey(): string {
    if (typeof this.keyCallback === 'function') {
      return this.keyCallback(this.value);
    } else {
      return String(this.value);
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
    return Object.values(this.children);
  }

  public addChild(childItem: DisjointSetItem<T>): DisjointSetItem<T> {
    this.children[childItem.getKey()] = childItem;
    childItem.parent = this;

    return childItem;
  }
}
