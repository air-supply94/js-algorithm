import { DisjointSetItem } from './disjointSetItem';

export class DisjointSet<T = unknown> {
  constructor(keyCallback?: (item: T) => string) {
    this.keyCallback = keyCallback;
    this.items = new Map<string | number, DisjointSetItem<T>>();
  }

  private readonly keyCallback?: (item: T) => string | number;

  public readonly items: Map<string | number, DisjointSetItem<T>>;

  public makeSet(itemValue: T): void {
    const tmpItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (!this.items.has(tmpItem.getKey())) {
      this.items.set(tmpItem.getKey(), tmpItem);
    }
  }

  public find(itemValue: T): string | number | null {
    const tmpItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (this.items.has(tmpItem.getKey())) {
      return this.items.get(tmpItem.getKey())
        .getRoot()
        .getKey();
    } else {
      return null;
    }
  }

  public union(valueA: T, valueB: T): string | number | null {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      return null;
    } else if (rootKeyA === rootKeyB) {
      return rootKeyA;
    } else {
      const rootA = this.items.get(rootKeyA);
      const rootB = this.items.get(rootKeyB);

      if (rootA.getRank() < rootB.getRank()) {
        rootB.addChild(rootA);
        return rootKeyB;
      } else {
        rootA.addChild(rootB);
        return rootKeyA;
      }
    }
  }

  public inSameSet(valueA: T, valueB: T): boolean {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      return false;
    } else {
      return rootKeyA === rootKeyB;
    }
  }
}
