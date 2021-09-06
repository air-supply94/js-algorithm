import { DisjointSetItem } from './disjointSetItem';

export class DisjointSet<T = unknown> {
  constructor(keyCallback?: (item: T) => string) {
    this.keyCallback = keyCallback;
    this.items = Object.create(null);
  }

  private readonly keyCallback?: (item: T) => string;

  private readonly items: {[key: string]: DisjointSetItem<T>; };

  public makeSet(itemValue: T): void {
    const tmpItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (!(tmpItem.getKey() in this.items)) {
      this.items[tmpItem.getKey()] = tmpItem;
    }
  }

  public find(itemValue: T): null | string {
    const tmpItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (tmpItem.getKey() in this.items) {
      return this.items[tmpItem.getKey()].getRoot()
        .getKey();
    } else {
      return null;
    }
  }

  public union(valueA: T, valueB: T): null | string {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      return null;
    } else if (rootKeyA === rootKeyB) {
      return rootKeyA;
    } else {
      const rootA = this.items[rootKeyA];
      const rootB = this.items[rootKeyB];

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
