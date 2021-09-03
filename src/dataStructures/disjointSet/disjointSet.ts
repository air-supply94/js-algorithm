import { DisjointSetItem } from './disjointSetItem';
import { DisjointSetInterface, DisjointSetItemInterface } from './types';

export class DisjointSet<T = unknown> implements DisjointSetInterface<T> {
  constructor(keyCallback?: (item: T) => string) {
    this.keyCallback = keyCallback;
    this.items = {};
  }

  public readonly keyCallback?: (item: T) => string;

  public readonly items: {[key: string]: DisjointSetItemInterface<T>; };

  public makeSet(itemValue: T): this {
    const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback);

    if (!this.items[disjointSetItem.getKey()]) {
      this.items[disjointSetItem.getKey()] = disjointSetItem;
    }

    return this;
  }

  public find(itemValue: T): null | string {
    const templateDisjointItem = new DisjointSetItem(itemValue, this.keyCallback);

    const requiredDisjointItem = this.items[templateDisjointItem.getKey()];

    if (!requiredDisjointItem) {
      return null;
    }

    return requiredDisjointItem.getRoot()
      .getKey();
  }

  public union(valueA: T, valueB: T): null | string {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      return null;
    }

    if (rootKeyA === rootKeyB) {
      return rootKeyA;
    }

    const rootA = this.items[rootKeyA];
    const rootB = this.items[rootKeyB];

    if (rootA.getRank() < rootB.getRank()) {
      rootB.addChild(rootA);
      return rootKeyB;
    }

    rootA.addChild(rootB);

    return rootKeyA;
  }

  public inSameSet(valueA: T, valueB: T): boolean {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);

    if (rootKeyA === null || rootKeyB === null) {
      return false;
    }

    return rootKeyA === rootKeyB;
  }
}
